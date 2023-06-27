"use client"
import React, { useCallback, useState } from 'react'
import Image from 'next/image';
import { useDropzone } from "react-dropzone";
import useStoryModal from '@/app/hooks/useStory';
import useCurrentUser from '@/app/actions/useCurrentUser';

const Stories = () => {
  const [ files, setFiles ] = useState<File[]>([]);
  const { setStory, shouldOpen } = useStoryModal();
  const { data: currentUser } = useCurrentUser();

  const handleChange = useCallback((base64: string) => {
      // set the story to the base64 string
      // open the story modal
      setStory(base64);
      shouldOpen(true);
      
      console.log(`Post: ${base64}`)
    }, [setStory, shouldOpen]);

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


  return (
    <div className='py-5  w-full px-8'>
        <div {...getRootProps()}
           className=' bg-neutral-700 flex items-end justify-center
            rounded-full w-14 h-14 md:w-16 md:h-16 overflow-hidden'>
              <input {...getInputProps()} />
              <Image src={currentUser?.profileImage || "/images/personplaceholder.png"} 
              alt="Story" width={100} height={100} style={{objectFit: "cover"}}/>
              <span className='font-semibold
                absolute rounded-full w-6 h-6 bg-blue-600 text-white p-[0.7px]
                border-2 border-black flex justify-center ml-6 items-center'>
                  +
              </span>
        </div>
    </div>
  )
}

export default Stories;
