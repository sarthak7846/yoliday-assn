import searchIcon from "../icons/search.svg";

export const Search = () => {
  return (
    <div className="flex relative">
      <input
        type="text"
        placeholder="Search a project"
        className="border border-[#E0E0E0] pl-4 pr-48 py-2 rounded-md text-[14px] font-roboto"
      />
      <img
        className="absolute inset-y-0 right-0 mr-1.5 mt-[5px] "
        src={searchIcon}
      />
    </div>
  );
};
