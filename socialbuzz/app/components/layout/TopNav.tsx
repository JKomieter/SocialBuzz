import { AiOutlineHeart } from "react-icons/ai";
import { CgLinear } from "react-icons/cg";
import { useRouter } from "next/navigation";
import SearchList from "../modals/MotionModals/notifications/SearchModal/SearchList";
import getAllUsers from "@/app/actions/getAllUsers";
import debounce from "lodash.debounce";
import { User } from "../modals/MotionModals/notifications/SearchModal/SearchModal";
import { useState, useCallback, ChangeEvent, useEffect } from "react";
import SearchInput from "../inputs/SearchInput";



const TopNav = () => {

    const router = useRouter();

    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { data: allUsers, isLoading: isLoadingAllUsers } = getAllUsers();
    // initial users fetched from the database

    const handleSearchInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        const value = event.target.value;
        setSearchValue(value);
      },
      []
    );

    // Debounce the search function to trigger it after the user stops typing
    const debouncedSearch = debounce(() => {
      performSearch(); // Call the actual search function here
    }, 500);

    const performSearch = () => {
      // You can implement your search logic here based on the searchValue
      // For example, filter the allUsers data based on the searchValue
      const filteredUsers =
        allUsers &&
        allUsers.filter((user: User) =>
          user?.username.toLowerCase().includes(searchValue.toLowerCase())
        );
      setSearchResults(filteredUsers || []);
      setIsLoading(false);
    };

    useEffect(() => {
      debouncedSearch();

      // Cleanup function to cancel the debounced search on unmount
      return () => debouncedSearch.cancel();
    }, [debouncedSearch, searchValue]);

    return (
      <div className="flex flex-col bg-black">
        <div className="flex flex-row justify-between w-full p-5 items-center gap-3">
          <CgLinear size={33} color="white" onClick={() => router.push("/")} />
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isLoading={isLoading}
            handleSearchInputChange={handleSearchInputChange}
            />
          <AiOutlineHeart size={33} color="white" />
        </div>
        <div className="w-screen h-auto z-50 fixed top-20 bg-neutral-900 px-5">
            {
                searchValue.length > 0 && <SearchList searchResults={searchResults} />
            }
        </div>
      </div>
    );
}

export default TopNav;