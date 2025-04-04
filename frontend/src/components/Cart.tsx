import cartIcon from "@/icons/cartMobile.svg";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/config";
import { CartItem } from "./CartItem";
import { Project } from "@/types/project";

export const Cart = () => {
  const [cartItems, setCartItems] = useState<Project[]>([]);
  const fetchCartItems = async () => {
    try {
      const res2 = await axios.get(`${BASE_URL}/cart`);

      setCartItems(res2.data.projects);
    } catch (error) {
      console.log("Error fetching projects:", error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  const removeItemHandler = async (id: number) => {
    try {
      await axios.post(`${BASE_URL}/remove-from-cart`, {
        id,
      });

      fetchCartItems();
    } catch (error) {
      console.log("Error removing from cart:", error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger onClick={fetchCartItems}>
        <img src={cartIcon} width={15} className="mr-5" />
      </PopoverTrigger>
      <PopoverContent>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem
              title={cartItem.title}
              id={cartItem.id!}
              key={cartItem.id}
              onRemove={removeItemHandler}
            />
          ))
        ) : (
          <span className="flex justify-center">Cart is empty</span>
        )}
      </PopoverContent>
    </Popover>
  );
};
