import { useCallback, useState } from "react";
import Modal from "../../Modal";
import useChangeProfileImage from "@/app/hooks/useChangeProfileImage";
import { useDropzone } from "react-dropzone";
import axios from "axios";


const ProfileChange = () => {
    const useChange = useChangeProfileImage();

    const handleChange = useCallback(async (base64: string) => {
        // useChange store will store the image str
        // to be used in the user profile
        try {
            useChange.onChange(base64);
            //send the image to the server
            await axios.post('/api/user/profileImage', {
                profileImage: base64
            })
            useChange.onClose();
            
        } catch (error) {
            console.log(error);
        }
    }, [useChange]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        //upload the file to the server
        const file = acceptedFiles[0];
        const reader = new FileReader();
        //convert file into base64

        reader.onload = (event: any) => {
            handleChange(event.target.result);
        }
        reader.readAsDataURL(file)
    }, [handleChange]);

    const closeProfileModal = () => {
        useChange.onClose();
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        'accept': {
            'video': [],
            'image': [],
        }
    });

    const bodyContent = (
        <>
            <div className="w-full bg-neutral-800 rounded-lg h-full 
                flex flex-row">
                <div 
                        {...getRootProps()}
                        className="w-full h-full flex justify-center items-center
                        "
                    >
                        <div className="w-full h-full flex flex-col justify-center items-center
                        gap-6 overflow-hidden resize-none">
                            <input {...getInputProps()} />
                            
                        </div>
                </div>
            </div>
        </>
    )

    if (!useChange.open) return null;

    return (
        <Modal bodyContent={bodyContent} onClose={closeProfileModal} />
    )
};

export default ProfileChange;