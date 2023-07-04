import Image from "next/image";

interface MediaUploaderProps {
    file: File;
}

const MediaUploader: React.FC<MediaUploaderProps> = ({ 
    file,
 }) => {
    return (
        <div key={file.size} className="w-full h-full rounded-b-lg resize-none" data-testid="media">
            {file.type.startsWith("image") ? (
                <Image
                src={URL.createObjectURL(file)}
                alt="Img"
                width={100}
                height={100}
                style={{width: "100%", height: "100%",  
                borderRadius: "8px", objectFit: 'cover'}}
                />
          ) : (
            <video controls style={{height: "100%",
            borderRadius: "8px", objectFit: 'cover', width: "100%"}}
            >
              <source src={URL.createObjectURL(file)} type={file.type} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
    )
}


export default MediaUploader;