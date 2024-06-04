
import { Logo } from "../components/Logo";

export const HomeScreen = () => {

    return (

        <>
            <div className="home">
                <div className="container">

                    <div className="cuadro"></div>
                    <Logo></Logo>

                    <div className="apper-words p-container">
                        <h2 className="portfolio-title lato-regular">Software Developer</h2>
                        <h1 className="portfolio-name oswald-bold">EMILY HERRERA</h1>
                    </div>

                </div>

            </div>
        </>
    );
}