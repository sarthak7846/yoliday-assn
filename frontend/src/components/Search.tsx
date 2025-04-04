import { ChangeEvent } from "react";
import { Cross } from "../icons/Cross";
import searchIcon from "../icons/search.svg";

interface SearchProps {
  query: string;
  onQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showCross: boolean;
  onClear: () => void;
}

export const Search = ({
  query,
  onQueryChange,
  showCross,
  onClear,
}: SearchProps) => {
  return (
    <div className="flex relative w-full md:w-auto mx-3 mt-3 md:mx-auto md:my-auto">
      <input
        type="text"
        placeholder="Search a project"
        value={query}
        onChange={onQueryChange}
        className="border border-[#E0E0E0] pl-4 md:pr-48 py-2 rounded-md text-[14px] font-roboto w-full md:w-auto"
      />
      {showCross && (
        <div
          className="absolute inset-y-2 md:inset-x-[18rem] right-10 cursor-pointer"
          onClick={onClear}
        >
          <Cross />
        </div>
      )}
      <img
        className="absolute inset-y-0 right-0 mr-1.5 mt-[5px] "
        src={searchIcon}
      />
    </div>
  );
};
