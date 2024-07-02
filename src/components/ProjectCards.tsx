import { IProject } from "../data/IProjects";


export const ProjectCard = ({ name, description, technologies }: IProject) => {

    return (

        <>
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title lato-light">{name}</h2>
                    {/* <img src={image} className="card-image" > </img> */}
                </div>
                <div className="card-body">

                    <p className="card-description lato-light">{description}</p>

                </div>
                <div className="card-footer">
                    <div className="card-technologies lato-light">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </div>
            </div>
        </>
    );
}