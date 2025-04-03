import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { Navbar } from "./Navbar";
import { ProjectItem } from "./ProjectItem";
import { Search } from "./Search";
import { BASE_URL } from "../config";
import axios from "axios";
import { Project } from "../types/project";
import { Spinner } from "../icons/Spinner";

export const MainContent = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/projects`);
        setProjects(res.data.projects);
      } catch (error) {
        console.log("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (query) setShowCross(true);

    const searchHandler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(searchHandler);
  }, [query]);

  useEffect(() => {
    const search = async () => {
      setLoading(true);

      if (!debouncedQuery) {
        try {
          const res = await axios.get(`${BASE_URL}/projects`);
          setProjects(res.data.projects);
        } catch (error) {
          console.log("Error fetching projects:", error);
        } finally {
          setLoading(false);
        }
        return;
      }

      try {
        const res = await axios.post(`${BASE_URL}/search`, {
          query: debouncedQuery,
        });
        setProjects(res.data.projects);
      } catch (error) {
        console.log("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [debouncedQuery]);

  return (
    <div className="bg-white flex-1 mx-8 ml-[20rem] my-6 rounded-2xl shadow-md flex flex-col py-6 px-5 h-[80vh]">
      <span className="font-roboto text-xl font-bold">Portfolio</span>
      <div className="flex justify-between items-center">
        <Navbar />
        <div className="flex">
          <Filter />
          <Search
            query={query}
            onQueryChange={(e) => setQuery(e.target.value)}
            showCross={showCross}
            onClear={() => {
              setQuery("");
              setShowCross(false);
            }}
          />
        </div>
      </div>

      <div className="overflow-y-auto">
        {loading ? (
          <Spinner />
        ) : projects && projects.length > 0 ? (
          projects.map(
            ({ id, author, category, description, image_url, title }) => (
              <ProjectItem
                id={id}
                author={author}
                category={category}
                description={description}
                image_url={image_url}
                title={title}
                key={id}
              />
            )
          )
        ) : (
          <div className="flex justify-center items-center h-72 font-roboto">
            No projects found
          </div>
        )}
      </div>
    </div>
  );
};
