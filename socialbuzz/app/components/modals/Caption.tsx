import getCurrentUser from "@/app/actions/getCurrentUser";
import { User } from "@prisma/client";

interface CaptionProps {
    caption: string;
    setCaption: React.Dispatch<React.SetStateAction<string>>;
    step: number;
    currentUser?: User;
}


const Caption: React.FC<CaptionProps> = ({
    caption,
    setCaption,
    step,
    currentUser
}) => {

    if (step !== 2) return null;

    return (
        <div className=" w-full h-full
            p-4 transition-all duration-500 
            bg-neutral-800 text-white
            flex flex-col items-center gap-3"
            >
                {/* this will hold the avatar of the user */}
            <span className="w-3 h-3 rounded-full mr-2 
            bg-neutral-500" />
            <span className="text-sm font-semibold">
                {currentUser?.username}
            </span>
        </div>
    )
}


export const getServerSideProps = async () => {
    const currentUser = await getCurrentUser();
    return {
        props: {
            currentUser
        }
    }
}

export default Caption;