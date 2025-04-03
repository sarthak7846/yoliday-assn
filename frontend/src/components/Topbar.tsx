import bellIcon from "../icons/bell.svg";

import downArrow from "../icons/downArrow.svg";
import { Cart } from "./Cart";

interface TopbarProps {
  name: string;
  role: string;
  profileImg: string;
}

export const Topbar = ({ name, role, profileImg }: TopbarProps) => {
  return (
    <div className=" w-full flex justify-end items-center py-1.5 border-b border-gray-200 shadow-sm">
      <Cart />
      <img src={bellIcon} className="mr-3" width={20} height={20} />
      <img
        src={profileImg}
        className="object-contain mx-3"
        width={40}
        height={40}
      />
      <div className="flex flex-col justify-center items-center py-1 font-roboto">
        <span className="font-semibold">{name}</span>
        <span className="text-[#848484]">{role}</span>
      </div>
      <img src={downArrow} className="ml-5 mr-10" width={10} height={10} />
    </div>
  );
};
