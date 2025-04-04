interface NavbarItemProps {
  active?: boolean;
  text: string;
}

export const NavbarItem = ({ active = false, text }: NavbarItemProps) => {
  return (
    <div
      className={`md:px-4 xs:px-6 px-3 py-2 text-sm ${
        active
          ? "text-[#DF5532] font-semibold border-b-2 border-b-[#DF5532]"
          : ""
      } hover:bg-slate-100 cursor-pointer`}
    >
      {text}
    </div>
  );
};
