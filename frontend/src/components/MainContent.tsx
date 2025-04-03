import { Filter } from "./Filter";
import { Navbar } from "./Navbar";
import { ProjectItem } from "./ProjectItem";
import { Search } from "./Search";

export const MainContent = ({ title }) => {
  return (
    <div className="bg-white flex-1 mx-8 ml-[20rem] my-6 rounded-2xl shadow-md flex-col py-6 px-5">
      <div className="">
        <span className="font-roboto text-xl font-bold m">{title}</span>
        <div className="flex justify-between items-center">
          <Navbar />
          <div className="flex">
            <Filter />
            <Search />
          </div>
        </div>
      </div>

      <div className="max-h-10">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};
