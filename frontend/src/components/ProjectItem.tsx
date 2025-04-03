import { motion } from "motion/react";
import { Project } from "../types/project";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL } from "@/config";

export const ProjectItem = ({
  id,
  title,
  description,
  category,
  author,
  image_url,
}: Project) => {
  const addToCartHandler = async () => {
    try {
      await axios.post(`${BASE_URL}/add-to-cart`, {
        id,
      });
      toast("Added to cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="flex my-8 rounded-xl overflow-hidden shadow-md mr-64 relative h-40 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <img src={image_url} width={250} height={250} className="object-cover" />
      <div className="flex flex-col font-roboto px-4 py-5 justify-between">
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold">{title}</span>
          <span className="text-[12px] text-[#9E95A2] mt-2">{description}</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="text-[12px]">{author}</span>
          <span className="text-[12px] text-[#9E95A2]">{category}</span>
        </div>
      </div>
      <button
        className="absolute right-0 bottom-0 bg-linear-to-bl from-[#F39519] to-[#FFCD67]  text-white font-medium text-[14px] p-2 m-5 rounded-md cursor-pointer"
        onClick={addToCartHandler}
      >
        Add to cart
      </button>
    </motion.div>
  );
};
