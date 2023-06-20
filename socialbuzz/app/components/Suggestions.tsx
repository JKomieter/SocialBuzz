import SuggestedFollowers from "./SuggestedFollowers";
import SuggestedUserItem from "./items/SuggestedUserItem";
import useCurrentUser from "../actions/useCurrentUser";


const Suggestions = () => {

  const { data: currentUser } = useCurrentUser();

  return (
    <div className="flex flex-col w-full items-center px-8 py-8 gap-4">
      {
        currentUser && (
            <SuggestedUserItem
            key={currentUser?.id}
            firstName={currentUser?.firstName}
            lastName={currentUser?.lastName}
            action="Switch" username={currentUser?.username} 
            userId={currentUser?.id} 
            profileImage={currentUser.profileImage}/>
        )
      }
      <span className="w-full mt-3 flex flex-row 
      justify-between items-center font-semibold">
        <p className="text-neutral-500 text-sm">
          Suggestions For You
        </p>
        <p className="text-neutral-100 text-sm">
          See All
        </p>
      </span>
      <SuggestedFollowers/>
    </div>
  );
};

export default Suggestions;
