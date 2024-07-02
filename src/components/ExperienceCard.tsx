import { IExperience } from "../data/IExperience";
import { Card } from "./Card";


export const ExperienceCard = ({ title, company, tasks, startDate, finishDate }: IExperience) => {

    return (

        <>
            <Card
                header={
                    <h2 className="experience-title lato-light">{title}</h2>
                }
                body={
                    <ul className="experience-description lato-light">
                        {tasks.map((task, index) => (<li key={index}>{task}</li>))}
                    </ul>
                }
                footer={
                    <div className="experience-footer lato-light">
                        <h4>{company}</h4>
                        <h4>{startDate.toString()} - {finishDate.toString()}</h4>
                    </div>
                }>

            </Card >
        </>
    );
}