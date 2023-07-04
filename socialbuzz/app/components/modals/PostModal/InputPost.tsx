import { IoMdImages } from "react-icons/io";
import MediaUploader from "../../media/MediaUploader";
import Button from "../../buttons/Button";

interface InputPostProps {
    files: File[];
    setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}


const InputPost: React.FC<InputPostProps> = ({
    files,
    setFiles
}) => {
    return (
        files.length === 0 ? (
                <div className="flex flex-col w-full h-full justify-center items-center gap-5">
                    <IoMdImages size={50} color="#fff" data-testid="image-icon" />
                    <p className="text-center text-white text-lg font-normal">
                        Drag photos or videos here
                    </p>
                    <Button bgColor="#0095F6" textColor="#fff" text="Select from computer" 
                    onClick={() => {}} width="60%"/>
                </div>
            ) : (
                <div className="w-full h-full resize-none " >
                    {
                        files.map((file) => (
                            <MediaUploader key={file.size} file={file} />
                        ))
                    }
                </div>
            )
    )
}

export default InputPost;