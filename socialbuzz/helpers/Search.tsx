import debounce from "lodash.debounce";
import { useState, useCallback, ChangeEvent, useEffect } from "react";
import getAllUsers from "../actions/getAllUsers";
import { User } from "../components/modals/MotionModals/notifications/SearchModal/SearchModal";
import SearchInput from "../components/inputs/SearchInput";
import SearchList from "../components/modals/MotionModals/notifications/SearchModal/SearchList";


const Search = () => {

    const [ searchValue, setSearchValue ] = useState<string>("");
    const [ searchResults, setSearchResults ] = useState<User[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const { data: allUsers, isLoading: isLoadingAllUsers } = getAllUsers();
    // initial users fetched from the database

    const handleSearchInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        const value = event.target.value;
        setSearchValue(value);
    }, []);

    // Debounce the search function to trigger it after the user stops typing
    const debouncedSearch = debounce(() => {
        performSearch(); // Call the actual search function here
    }, 500);

    const performSearch = () => {
        // You can implement your search logic here based on the searchValue
        // For example, filter the allUsers data based on the searchValue
        const filteredUsers = allUsers && allUsers.filter((user: User) =>
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
      <div className="flex flex-col gap-6 w-full items-center px-3 overflow-y-hidden ">
        <div className="md:flex hidden flex-col gap-4 w-full items-center z-10 pt-3 bg-black">
          <p className="text-neutral-300 text-2xl py-3 font-bold w-full mb-3">
            Search
          </p>
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isLoading={isLoading}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
        <SearchList
          searchResults={searchResults.length > 0 ? searchResults : []}
        />
      </div>
    );
}

export default Search;