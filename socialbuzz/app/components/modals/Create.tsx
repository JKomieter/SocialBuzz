"use client"
import useCreate from "@/app/hooks/useCreate";
import { IoMdImages } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Button from "../buttons/Button";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import MediaUploader from "../media/MediaUploader";


const Create = () => {
    const create = useCreate();
    const [ files, setFiles ] = useState<File[]>([]);
    const [ post, setPost ] = useState<string>("");

    const handleChange = useCallback((base64: string) => {
        setPost(base64);
        
        console.log(`Post: ${base64}`)
    }, [post]);
    
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

    //send post to the server to be saved
    const handleSubmit = async () => {

    }
    
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
            items-center bg-black bg-opacity-40 gap-7
            flex-col h-screen w-screen text-white p-8
            ">
                <div className="flex items-end w-full px-2 ">
                    <span className="w-full text-right flex justify-end">
                        <IoClose color="#fff" className="cursor-pointer" 
                        onClick={() => create.onClose()} size={34} />
                    </span>
                </div>
                <div className="flex flex-col w-full h-[80%] md:w-[30%] md:h-[76%]
                    bg-neutral-800 rounded-xl 
                    transition duration-500 ease-in-out
                ">
                    <div className="w-full text-center font-meduim border-b-[0.1px]
                    border-[#fff] py-2 flex flex-row justify-center items-center gap-12">
                            {
                                files.length > 0 &&
                                <span className="p-1 rounded-full hover:bg-neutral-500">
                                    <HiOutlineArrowLeft color="#fff" size={23} onClick={() => {}}/>  
                                </span> 
                        //this handles the back button
                            }
                        <span className="text-md">
                            Create new post
                        </span>
                            {
                                files.length > 0 &&
                        <span className='text-[#0095F6] text-sm font-normal cursor-pointer'>
                            Next
                        </span>
                            }
                    </div>
                    <div 
                        {...getRootProps()}
                        className="w-full h-full flex justify-center items-center"
                    >
                        <div className="w-full h-full flex flex-col justify-center items-center
                        gap-6">
                            <input {...getInputProps()} />
                                {
                                    files.length === 0 ? (
                                        <div className="flex flex-col w-full h-full justify-center items-center gap-5">
                                            <IoMdImages size={50} color="#fff"/>
                                            <p className="text-center text-white text-lg font-normal">
                                                Drag photos or videos here
                                            </p>
                                            <Button bgColor="#0095F6" textColor="#fff" text="Select from computer" 
                                            onClick={() => {}} width="60%"/>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full">
                                            {
                                                files.map((file) => (
                                                    <MediaUploader key={file.size} file={file}/>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Create;