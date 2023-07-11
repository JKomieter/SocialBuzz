import Image from "next/image"
import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BackGround } from "./Carousel";

interface UserStoryProps {
    handleChange: (base64: string) => void;
    currentUser?: Record<string, any>;
}

const UserStory: React.FC<UserStoryProps> = ({
    handleChange,
    currentUser
}) => {
    const [ files, setFiles ] = useState<File[]>([]);

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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        'accept': {
            'video': [],
            'image': [],
        }
    });

    const showBorder = useMemo(() => {
        // show colored border if the user has stories
        if (currentUser?.stories?.length > 0) {
            return BackGround;
        }
    },[currentUser?.stories?.length])

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div {...getRootProps()}
            className=' bg-neutral-700 flex items-end justify-center 
            rounded-full w-14 h-14 md:w-16 md:h-16 overflow-hidden md:mr-0 mr-4'
            style={{background: showBorder}}>
                <input {...getInputProps()} />
                <Image src={currentUser?.profileImage || "/images/personplaceholder.png"} 
                alt="Story" width={100} height={100} style={{objectFit: "cover",}}/>
                <span className='font-semibold
                absolute rounded-full w-6 h-6 bg-blue-600 text-white p-[0.7px]
                border-2 border-black flex justify-center ml-6 items-center'>
                    +
                </span>
            </div>
            <p className="text-sm text-neutral-300">
                {currentUser?.username}
            </p>
        </div>
    )
}

export default UserStory;