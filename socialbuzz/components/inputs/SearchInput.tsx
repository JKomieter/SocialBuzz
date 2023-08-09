import { CircularProgress } from "@material-ui/core";
import { AiFillCloseCircle } from "react-icons/ai";



interface SearchInputProps {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const SearchInput: React.FC<SearchInputProps> = ({
    searchValue,
    setSearchValue,
    isLoading,
    handleSearchInputChange
}) => {
    return (
      <div
        className="flex flex-row w-full bg-neutral-800 
        rounded-lg py-1 items-center justify-between px-2"
      >
        <input
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(e) => handleSearchInputChange(e)}
          className="w-full bg-neutral-800 p-2 rounded-md outline-none border-none focus:outline-none"
        />
        {isLoading ? (
          <CircularProgress color="inherit" size={18} />
        ) : (
          <AiFillCloseCircle
            size={18}
            onClick={() => setSearchValue("")}
            className="text-neutral-300 cursor-pointer"
          />
        )}
      </div>
    );
}

export default SearchInput;