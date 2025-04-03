import { SidebarItem } from "./SidebarItem";
import dashboardIcon from "../icons/dashboard.svg";
import portfolioIcon from "../icons/portfolio.svg";
import inputIcon from "../icons/input.svg";
import profileIcon from "../icons/profile.svg";
import logo from "../icons/logo.svg";

export const Sidebar = () => {
  return (
    <div className="h-screen w-72 fixed top-0 left-0 bg-[#DF5532] ">
      <div className="flex items-center font-roboto text-white mt-6 ml-2 px-3">
        <img src={logo} />
        <span className="ml-3">LOGO</span>
      </div>
      <div className="mt-24">
        <SidebarItem text="Dashboard" icon={dashboardIcon} />
        <SidebarItem text="Portfolio" icon={portfolioIcon} active={true} />
        <SidebarItem text="Inputs" icon={inputIcon} />
        <SidebarItem text="Profile" icon={profileIcon} />
      </div>
    </div>
  );
};
