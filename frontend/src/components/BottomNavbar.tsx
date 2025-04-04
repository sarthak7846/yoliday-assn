import { BottomNavbarItems } from "./BottomNavbarItems";
import homeIcon from "../icons/home.svg";
import portfolioIcon from "../icons/portfolio_mobile.svg";
import inputIcon from "../icons/input_mobile.svg";
import profileIcon from "../icons/profile_mobile.svg";

export const BottomNavbar = () => {
  return (
    <div className="flex justify-evenly items-center py-1 rounded-t-2xl fixed bottom-0 right-0 left-0 bg-white md:hidden">
      <BottomNavbarItems text="Home" icon={homeIcon} />
      <BottomNavbarItems text="Portfolio" icon={portfolioIcon} active={true} />
      <BottomNavbarItems text="Input" icon={inputIcon} />
      <BottomNavbarItems text="Profile" icon={profileIcon} />
    </div>
  );
};
