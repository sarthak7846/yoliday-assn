import filterIcon from "../icons/filter.svg";

export const Filter = () => {
  return (
    <div className="flex items-center mr-4 cursor-pointer">
      <img
        src={filterIcon}
        width={15}
        height={15}
        className="object-contain mx-1"
      />
      <span className="font-roboto text-[16px]">Filter</span>
    </div>
  );
};
