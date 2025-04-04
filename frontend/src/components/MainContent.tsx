import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { Navbar } from "./Navbar";
import { Search } from "./Search";
import { BASE_URL } from "../config";
import axios from "axios";
import { Project } from "../types/project";
import { Projects } from "./Projects";

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
    <div className="bg-white md:flex-1  md:ml-[20rem] md:mx-8 md:my-6 md:rounded-2xl md:shadow-md flex flex-col md:py-6 md:px-5 h-[80vh]">
      <span className="font-roboto text-xl font-bold hidden md:block">
        Portfolio
      </span>

      <div className="md:flex md:justify-between  items-center">
        <Navbar />
        <div className="flex justify-center">
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

      <Projects loading={loading} projects={projects} />
    </div>
  );
};
