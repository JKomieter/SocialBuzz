"use client";
import { useCallback, useState } from "react";
import Modal from "../../Modal";
import useChangeProfileImage from "@/app/hooks/useChangeProfileImage";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Image from "next/image";
import useCurrentUser from "@/app/actions/useCurrentUser";

// component to change the profile image
const ProfileChange = () => {
    const useChange = useChangeProfileImage();
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

    const handleChange = useCallback(async (base64: string) => {
        // useChange store will store the image str
        // to be used in the user profile
        try {
            useChange.onChange(base64);
            useChange.onClose();
            //send the image to the server
            await axios.post('/api/user/profileImage', {
                profileImage: base64
            })
            mutateCurrentUser();
        } catch (error) {
            console.log(error);
        }
    }, [useChange, mutateCurrentUser]);

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
            'image': [],
        }
    });

    const bodyContent = (
        <div className="w-full md:w-[60%] bg-neutral-700 rounded-[16px] h-auto
            flex flex-col items-center text-center">
            <div className="w-full p-3 flex flex-col gap-1 justify-center items-center">
                <span className="rounded-full w-[70px] h-[70px]">
                    {
                        currentUser?.profileImage ? (
                                <Image src={useChange.profileImage || 
                                    currentUser?.profileImage || 
                                    '/images/default-profile.png'} alt="" 
                                className="rounded-full w-full h-full" 
                                width={100} height={100} style={{objectFit: "cover"}} />
                        ) : (
                            <Image src="/images/personplaceholder.png" alt="" 
                                className="rounded-full w-full h-full" 
                                width={100} height={100} style={{objectFit: "cover"}} />
                        )   
                    }
                </span>
                <span className="text-white font-medium text-lg ">
                    Synced profile photo
                </span>
                <span className="text-neutral-500 font-normal text-sm">
                    Instagram, Facebook
                </span>
            </div>
            <div 
                {...getRootProps()}
                className="text-[#0095F6] font-semibold w-full
                    border-t-[0.5px] border-neutral-500 p-3">
                <input {...getInputProps()} />
                Upload Photo
            </div>
            <div className="text-white font-normal border-t-[0.5px] border-neutral-500 p-3
             w-full">
                Manage sync settings
            </div>
            <div className="text-[#ED4956] font-semibold border-t-[0.5px] border-neutral-500 p-3
             w-full">
                Remove Current Photo
            </div>
            <div className="text-white font-normal border-t-[0.5px] border-neutral-500 p-3
             w-full" onClick={closeProfileModal}>
                Cancel
            </div>
        </div>
    )

    if (useChange.open !== true) return null;

    return (
        <Modal isJustifyCenter 
        bodyContent={bodyContent} onClose={closeProfileModal} />
    )
};

export default ProfileChange;