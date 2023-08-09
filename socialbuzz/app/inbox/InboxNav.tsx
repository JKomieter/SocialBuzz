import { useRouter } from "next/navigation";
import useCurrentUser from "../../actions/useCurrentUser";
import Nav from "./Nav";

const InboxNav = () => {
    const router = useRouter();
    const { data: currentUser, isLoading } = useCurrentUser();


    return (
        <div className="border-b-neutral-500 top-0 w-full z-50 fixed md:hidden bg-black" style={{borderBottomWidth: "0.2px"}}>
            <Nav username={currentUser?.username} />
        </div>
    )
}

export default InboxNav;