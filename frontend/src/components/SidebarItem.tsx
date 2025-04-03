interface SidebarItemProps {
  icon: string;
  text: string;
  active?: boolean;
}

export const SidebarItem = ({ icon, text, active }: SidebarItemProps) => {
  return (
    <div
      className={`font-roboto text-white flex px-7 py-2.5 my-3 rounded-md ${
        active && "bg-linear-to-r from-[#FFAD98] to-[#DF5532]"
      } `}
    >
      <img src={icon} alt="icon" className="mr-4" />
      {text}
    </div>
  );
};
