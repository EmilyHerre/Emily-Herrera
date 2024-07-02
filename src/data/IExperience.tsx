export interface IExperience {
    id: string;
    title: string;
    company: string;
    startDate: Date;
    finishDate: Date;
    tasks: string[];
}

export const experiences: IExperience[] = [
    {
        id: "exp1",
        title: "Software Developer",
        company: "BD Consultores",
        startDate: new Date(2022, 9),
        finishDate: new Date(2022, 12),
        tasks: ["Developed a web application using React, TypeScript, and Bootstrap.", "Worked on a team to create a responsive design for a medical company's website."]

    },
    {
        id: "exp2",
        title: "Software Developer",
        company: "Insilius",
        startDate: new Date(2023, 3),
        finishDate: new Date(2023, 9),
        tasks: ["I contributed to a pet care project using Flutter for frontend and .NET Core 6 (C#) for backend, ensuring robust software.", "Managed tasks like time estimation and prioritization.", "Collaborated with the team using Git, improving communication and product quality.", "Integrated Google Maps API for accurate location tracking, enhancing service accessibility.", "Advocated for best practices like code reviews, boosting project success and team productivity."]
    }
];
