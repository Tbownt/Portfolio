import { useContext } from "react";
import { LanguageContext } from "../context";
import { projectsData } from "../helpers";
import { ProjectItems } from "./ProjectItems";

export const ProjectList = () => {
  const { projectsEN, projectsES } = projectsData();
  const { language } = useContext(LanguageContext);

  return (
    <>
      {language === "es"
        ? projectsES.map((project) => (
            <ProjectItems key={project.title} {...project} />
          ))
        : projectsEN.map((project) => (
            <ProjectItems key={project.title} {...project} />
          ))}
    </>
  );
};
