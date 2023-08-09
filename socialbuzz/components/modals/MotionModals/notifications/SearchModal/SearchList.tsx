import SearchListItem from "../../../../items/SearchListItem";
import { User } from "./SearchModal";


interface SearchListProps {
    searchResults: User[];
}

// component to display search results of users
const SearchList: React.FC<SearchListProps> = ({
    searchResults
}) => {
    return (
        <div className="flex w-full pt-3 flex-col gap-4 overflow-y-scroll">
            {
                searchResults?.length > 0 && searchResults?.map((result) => (
                    <SearchListItem key={result.id} result={result} />
                ))
            }
        </div>
    )
}


export default SearchList;