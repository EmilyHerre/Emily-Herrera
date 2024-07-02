export interface IProject {
    id: string;
    name: string;
    //image: string;
    description: string;
    technologies: string[];
}

export const projects: IProject[] = [
    {
        id: "project1",
        name: "Zelf",
        description: "A website created to showcase my work.",
        technologies: ["React", "TypeScript", "Bootstrap"]
    },
    {
        id: "project2",
        name: "Emiguremi",
        description: "A website created to showcase my work.",
        technologies: ["React", "TypeScript", "Bootstrap"]
    }
];