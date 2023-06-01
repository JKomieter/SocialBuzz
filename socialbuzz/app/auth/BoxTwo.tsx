import { useRouter } from "next/navigation";



interface BoxTwoProps {
    textOne: string;
    textTwo: string;
    routerLink: string;
}



const BoxTwo: React.FC<BoxTwoProps> = ({
    textOne,
    textTwo,
    routerLink
}) => {

    const router = useRouter();

    return (
        <>
            <div className="w-[350px] p-5 flex items-center
            md:border-[0.7px] border-[0px]
            border-neutral-300">
                <p className="text-neutral-500 w-full text-center text-xs">
                    {textOne}
                    <span onClick={() => router.push(routerLink)} className="text-[blue] cursor-pointer">
                         {textTwo}
                    </span>
                </p>
            </div>
            <div className="w-[350px] p-5 flex items-center">
                <p className="text-neutral-500 w-full text-center text-xs">
                    Get the app.
                </p>
            </div>
        </>
    )
}


export default BoxTwo;