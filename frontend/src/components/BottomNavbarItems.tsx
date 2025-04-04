export const BottomNavbarItems = ({
  text,
  icon,
  active,
}: {
  text: string;
  icon: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center text-xs font-roboto font-normal  ${
        active ? "text-[#DF5532]" : "text-[#D6D1D5]"
      }`}
    >
      <img
        src={icon}
        className={`object-contain mb-1.5 pt-1 ${
          active && "border-t-2 border-[#DF5532]"
        }  `}
        width={16}
      />
      <span>{text}</span>
    </div>
  );
};
