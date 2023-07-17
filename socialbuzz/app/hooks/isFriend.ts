import useCurrentUser from "../actions/useCurrentUser";

// function to determine if the user is a friend of the logged in user
const isFriend = (userId: string) => {
    // current user
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: currentUser } = useCurrentUser();

    // determine if the user is a friend of the logged in user
    // use Map structure
    // console.log(currentUser?.followingIds)
    // const map = new Map(currentUser?.followingIds || []);
    console.log(currentUser?.followingIds);
    // // return true if the user is a friend of the logged in user
    // return map.has(userId);
    return true;
} 

export default isFriend;