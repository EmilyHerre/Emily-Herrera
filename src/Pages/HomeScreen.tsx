import { AboutMe } from "./AboutMe";
import { DevSkills } from "./DevSkills";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Projects } from "./Projects";



export const HomeScreen = () => {
    return (
        <>
            <div>
                <Header></Header>
                <div className="home-container">
                    <AboutMe></AboutMe>
                    <Projects></Projects>
                    <DevSkills></DevSkills>
                    <Experience></Experience>
                </div>

            </div>



        </>
    );
}