import { IProject } from "../data/IProjects";
import { Card } from "./Card";


export const ProjectCard = ({ name, description, technologies }: IProject) => {

    return (

        <>
            <Card
                header={
                    <h2 className="project-title lato-light">{name}</h2>
                }
                body={
                    <p className="project-description lato-light">{description}
                    </p>
                }
                footer={
                    <div className="project-technologies lato-light">{technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                }>

            </Card >
        </>
    );
}