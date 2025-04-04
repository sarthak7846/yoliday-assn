import { Project } from "@/types/project";
import { ProjectItem } from "./ProjectItem";
import { Spinner } from "@/icons/Spinner";

export const Projects = ({
  loading,
  projects,
}: {
  loading: boolean;
  projects: Project[];
}) => {
  return (
    <div className="overflow-y-auto mt-3 md:mt-auto md:mb-auto mb-3">
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
  );
};
