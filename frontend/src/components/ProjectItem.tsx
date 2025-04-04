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
      className="flex mx-3 md:mx-auto mb-3 md:my-8 rounded-xl overflow-hidden border md:border-none md:shadow-md md:mr-64 relative h-28 md:h-40 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <img src={image_url} className="object-cover w-[110px] md:w-[250px]" />
      <div className="flex flex-col font-roboto px-4 py-5 justify-between">
        <div className="flex flex-col">
          <span className="md:text-[18px] text-[14px] font-semibold">
            {title}
          </span>
          <span className="text-[12px] text-[#9E95A2] mt-2 md:block hidden">
            {description}
          </span>
        </div>
        <div className="flex flex-col md:mb-2">
          <span className="md:text-[12px] text-[10px]">{author}</span>
          <span className="md:text-[12px] text-[10px] text-[#9E95A2]">
            {category}
          </span>
        </div>
      </div>
      <button
        className="absolute right-0 bottom-0 bg-linear-to-bl from-[#F39519] to-[#FFCD67]  text-white font-medium text-[14px] md:p-2 px-5 py-1 m-4 md:m-5 md:rounded-md rounded-sm cursor-pointer"
        onClick={addToCartHandler}
      >
        <span className="md:hidden block">A</span>
        <span className="md:block hidden">Add to cart</span>
      </button>
    </motion.div>
  );
};
