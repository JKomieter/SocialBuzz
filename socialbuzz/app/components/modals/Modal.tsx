import { IoClose } from "react-icons/io5";


interface ModalProps{
    bodyContent: React.ReactElement;
    onClose: () => void;
    step?: number;
    isJustifyCenter?: boolean;
}

//modal component for uploading profile image and creating posts
const Modal: React.FC<ModalProps> = ({
    bodyContent,
    onClose,
    step,
    isJustifyCenter
}) => {
    return (
         <div className="fixed z-50 flex outline-none 
            items-center bg-black bg-opacity-70 gap-5
            flex-col h-screen w-screen text-white p-8
            ">
                <div className="flex items-end w-full px-2 basis-1/9">
                    <span className="w-full text-right flex justify-end">
                        <IoClose color="#fff" className="cursor-pointer" 
                        onClick={onClose} size={34} />
                    </span>
                </div>
                <div className={`w-full max-h-[450px] min-h-[300px] md:h-full basis-8/9  
                    ${step === 1 ? 'md:w-[40%]' : 'md:w-[60%]'}
                    ${isJustifyCenter ? 'flex justify-center' : ''}
                    transition-width duration-700 transition-all ease-in-out
                `}>
                    {bodyContent}
                </div>
        </div>
    )
}

export default Modal;