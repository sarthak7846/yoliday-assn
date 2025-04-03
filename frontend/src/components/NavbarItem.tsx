interface NavbarItemProps {
  active?: boolean;
  text: string;
}

export const NavbarItem = ({ active = false, text }: NavbarItemProps) => {
  return (
    <div
      className={`px-4 py-2 text-sm ${
        active
          ? "text-[#DF5532] font-semibold border-b-2"
          : "border-b border-[#E0E0E0]"
      } hover:bg-slate-100 cursor-pointer`}
    >
      {text}
    </div>
  );
};
