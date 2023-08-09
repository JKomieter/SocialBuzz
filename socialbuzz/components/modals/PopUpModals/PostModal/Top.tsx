import { HiOutlineArrowLeft } from "react-icons/hi";



interface TopProps {
    files: File[];
    handleSubmit: (e: any) => void;
    step: number;
    goBack: () => void;
}


const Top: React.FC<TopProps> = ({
    files,
    handleSubmit,
    step,
    goBack
}) => {
    return (
        <div className="w-full text-center font-meduim basis-1/2
        border-neutral-600 py-2 flex flex-row justify-between items-center
        bg-neutral-800 rounded-t-lg text-align px-2" style={{borderBottomWidth: "0.2px"}}>
                {
                    files.length > 0 &&
                    <span className="p-1 cursor-pointer rounded-full hover:bg-neutral-500">
                        <HiOutlineArrowLeft color="#fff" size={23} onClick={goBack}/>  
                    </span> 
            //this handles the back button
                }
            <span className="text-md w-full">
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