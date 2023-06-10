import { HiOutlineArrowLeft } from "react-icons/hi";



interface TopProps {
    files: File[];
    handleSubmit: (e: any) => void;
    step: number;
}


const Top: React.FC<TopProps> = ({
    files,
    handleSubmit,
    step
}) => {
    return (
        <div className="w-full text-center font-meduim border-b-[0.1px] basis-1/2
        border-[#fff] py-2 flex flex-row justify-center items-center gap-12 w-40%
        bg-neutral-800 rounded-t-lg text-align px-2">
                {
                    files.length > 0 &&
                    <span className="p-1 cursor-pointer rounded-full hover:bg-neutral-500">
                        <HiOutlineArrowLeft color="#fff" size={23} onClick={() => {}}/>  
                    </span> 
            //this handles the back button
                }
            <span className="text-md">
                Create new post
            </span>
                {
                    files.length > 0 &&
            <span className='text-[#0095F6] text-sm font-normal cursor-pointer' 
                onClick={(e) => handleSubmit(e)}>
                { step === 1 ? 'Next' : 'Share' }
            </span>
                }
        </div>
    )
}

export default Top;