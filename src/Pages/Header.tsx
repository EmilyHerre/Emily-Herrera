
import { Logo } from "../components/Logo";

export const Header = () => {

    return (
        <>
            <div className="header">
                <div className="container">

                    <div className="cuadro"></div>
                    <Logo></Logo>

                    <div className="p-container">
                        <h2 className="portfolio-title lato-regular">Software Developer</h2>
                        <h1 className="portfolio-name oswald-bold">EMILY HERRERA</h1>

                    </div>
                    <div className="more-about-me lato-regular">Explore more about me!</div>
                </div>
            </div>

        </>
    );
}