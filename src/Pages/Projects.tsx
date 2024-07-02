import { ProjectCard } from "../components/ProjectCards";
import { projects } from "../data/IProjects";

export const Projects = () => {
    return (
        <div className="section-projects">
            <div className="section-header">
                <h1 className="oswald-bold">PROJECTS</h1>
            </div>
            <div className="projects">
                {projects.map(project => {
                    return <ProjectCard key={project.id} {...project} />
                })
                }
            </div>
        </div>

    );

};