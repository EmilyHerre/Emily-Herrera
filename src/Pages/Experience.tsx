
import { ExperienceCard } from "../components/ExperienceCard";
import { experiences } from "../data/IExperience";

export const Experience = () => {
    return (
        <div className="section-projects">
            <div className="section-header">
                <h1 className="oswald-bold">EXPERIENCE</h1>
            </div>
            <div className="experience">
                {experiences.map(experience => {
                    return <ExperienceCard key={experience.id} {...experience} />
                })
                }
            </div>
        </div>

    );

};