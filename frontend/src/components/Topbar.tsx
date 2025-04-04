import bellIcon from "../icons/bell.svg";
import bellIconMobile from "../icons/bell_mobile.svg";

import downArrow from "../icons/downArrow.svg";
import { Cart } from "./Cart";

interface TopbarProps {
  name: string;
  role: string;
  profileImg: string;
}

export const Topbar = ({ name, role, profileImg }: TopbarProps) => {
  return (
    <div className="w-full flex justify-between md:justify-end items-center py-5  xs:px-6 px-3 md:px-10 md:py-2 md:border-b md:border-gray-200 shadow-sm ">
      <span className="md:hidden text-lg font-roboto font-medium">
        Portfolio
      </span>
      <div className="flex">
        <Cart />
        <img
          src={bellIcon}
          className="md:mr-3 hidden md:block"
          width={20}
          height={20}
        />
        <img
          src={bellIconMobile}
          className="md:mr-3 block md:hidden"
          width={16}
          height={20}
        />

        <img
          src={profileImg}
          className="object-contain mx-3 hidden md:block"
          width={40}
          height={40}
        />
      </div>

      <div className="md:flex flex-col justify-center items-center font-roboto hidden">
        <span className="font-semibold">{name}</span>
        <span className="text-[#848484]">{role}</span>
      </div>
      <img
        src={downArrow}
        className="ml-5 hidden md:block"
        width={10}
        height={10}
      />
    </div>
  );
};
