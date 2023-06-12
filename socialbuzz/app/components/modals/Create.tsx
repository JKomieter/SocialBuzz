"use client"
import useCreate from "@/app/hooks/useCreate";
import { IoMdImages } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Button from "../buttons/Button";
import { useDropzone } from "react-dropzone";
import { useCallback, useMemo, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import MediaUploader from "../media/MediaUploader";
import axios from "axios";
import Caption from "./Caption";
import Top from "./Top";
import InputPost from "./InputPost";


const Create = () => {
    const create = useCreate();
    const [ files, setFiles ] = useState<File[]>([]);
    const [ post, setPost ] = useState<string>("");
    const [ caption, setCaption ] = useState<string>("");
    const [ step, setStep ] = useState<number>(1);

    const handleChange = useCallback((base64: string) => {
        setPost(base64);
        
        console.log(`Post: ${base64}`)
    }, []);
    
    const onDrop = useCallback((acceptedFiles: File[]) => {
        //upload the file to the server
        setFiles(acceptedFiles)
        const file = acceptedFiles[0];
        const reader = new FileReader();
        //convert file into base64

        reader.onload = (event: any) => {
            handleChange(event.target.result);
        }
        reader.readAsDataURL(file)
    }, [handleChange]);

    const closePost = useCallback(() => {
        // close the create post modal and clear the files
        create.onClose();
        files.splice(0, files.length);
        setStep(1);
    }, [create, files])

    const goBack = useCallback(() => {
        // go back to the previous step
        if (step === 2) {
            setStep(1);
        }
    }, [step])

    //send post to the server to be saved
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (step === 1 && files.length > 0) {
            setStep(2);
            return;
        }
        try {
            const newPost = await axios.post('/api/createPost', {
                post,
                caption
            });
        } catch (error) {
            console.log(error);
        }
    }

    const showInput = useMemo(() => {
        // permits user from adding multiple images or videos
        if (files.length > 0) return 'none';
    }, [files.length])
    
    //accept videos and images
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        'accept': {
            'video': [],
            'image': [],
        }
     });

    if (!create.open) return null;

    return (
        <div className="fixed z-50 flex outline-none 
            items-center bg-black bg-opacity-40 gap-5
            flex-col h-screen w-screen text-white p-8
            ">
                <div className="flex items-end w-full px-2 basis-1/9">
                    <span className="w-full text-right flex justify-end">
                        <IoClose color="#fff" className="cursor-pointer" 
                        onClick={closePost} size={34} />
                    </span>
                </div>
                <div className={`w-full max-h-[450px] min-h-[300px] md:h-full basis-8/9  
                    ${step === 1 ? 'md:w-[40%]' : 'md:w-[60%]'}
                    transition-width duration-700 transition-all ease-in-out
                `}>
                    <Top files={files} handleSubmit={handleSubmit} step={step} goBack={goBack} />
                    <div className="w-full bg-neutral-800 rounded-lg h-full 
                     flex flex-row">
                        <div 
                                {...getRootProps()}
                                className="w-full h-full flex justify-center items-center
                                "
                            >
                                <div className="w-full h-full flex flex-col justify-center items-center
                                gap-6 overflow-hidden resize-none">
                                    <input style={{display: showInput}} {...getInputProps()} />
                                    <InputPost files={files} setFiles={setFiles} />
                                </div>
                        </div>
                        { step === 2 && 
                            <Caption caption={caption} setCaption={setCaption} step={step}/>
                        }
                    </div>
                </div>
            </div>
    )
}

export default Create;