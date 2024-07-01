import { AboutMe } from "./AboutMe";
import { Header } from "./Header";



export const HomeScreen = () => {
    return (
        <>
            <div>
                <Header></Header>
                <div className="home-container">
                    <AboutMe></AboutMe>
                    <AboutMe></AboutMe>
                </div>

            </div>



        </>
    );
}