import GirlLogo from "../components/girl";


export const AboutMe = () => {

    return (
        <>
            <div className="page">
                <div className="about-me">
                    <div className="about-me-box">
                        <div className="box">
                            <GirlLogo></GirlLogo>

                            <h2 className="box-title lato-light">
                                Hello!
                            </h2>
                            <p className="box-body lato-light">
                                I am a <span className="resalted">proactive, creative</span>, and <span className="resalted"> responsible</span> individual who takes pleasure in acquiring new technological skills. I approach tasks with <span className="resalted"></span>enthusiasm and am currently <span className="resalted">seeking a challenging role</span> that provides continuous opportunities for learning and <span className="resalted">personal development</span>. I am looking for an environment where I can <span className="resalted">connect</span> with individuals willing to share their <span className="resalted">expertise</span> and <span className="resalted">knowledge</span>, thereby contributing to my <span className="resalted">professional growth</span>.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}