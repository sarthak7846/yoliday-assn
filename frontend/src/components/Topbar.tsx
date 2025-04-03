import bellIcon from "../icons/bell.svg";

import downArrow from "../icons/downArrow.svg";

export const Topbar = ({ name, role, profileImg }) => {
  return (
    <div className=" w-full flex justify-end py-1.5 border-b border-gray-200 shadow-sm">
      <img src={bellIcon} className="mr-3" />
      <img src={profileImg} className="object-contain mx-3" />
      <div className="flex flex-col justify-center items-center py-1 font-roboto">
        <span className="font-semibold">{name}</span>
        <span className="text-[#848484]">{role}</span>
      </div>
      <img src={downArrow} className="ml-5 mr-10" />
    </div>
  );
};
