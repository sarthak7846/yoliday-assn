import { Cross } from "@/icons/Cross";

export const CartItem = ({
  title,
  id,
  onRemove,
}: {
  title: string;
  id: number;
  onRemove: (id: number) => void;
}) => {
  return (
    <div className="flex justify-between ">
      <span className="">{title}</span>
      <div className="cursor-pointer" onClick={() => onRemove(id)}>
        <Cross />
      </div>
    </div>
  );
};
