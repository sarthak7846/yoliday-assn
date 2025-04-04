import filterIcon from "../icons/filter.svg";
import filterIconMobile from "../icons/filter_mobile.svg";

export const Filter = () => {
  return (
    <>
      <div className="md:flex items-center mr-4 cursor-pointer hidden">
        <img
          src={filterIcon}
          width={15}
          height={15}
          className="object-contain mx-1"
        />
        <span className="font-roboto text-[16px]">Filter</span>
      </div>
      <div className="fixed md:hidden bottom-16 z-10 bg-[#DF5532] font-roboto text-white flex px-4 py-1 rounded-2xl">
        <img src={filterIconMobile} width={18} className="mr-2" />
        Filter
      </div>
    </>
  );
};
