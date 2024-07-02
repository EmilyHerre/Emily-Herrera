import { devSkills } from "../data/IDevSkills";

export const DevSkills = () => {
    return (
        <div className="section-skills">
            <div className="section-header-skills">
                <h1 className="oswald-bold">Dev Skills</h1>
            </div>
            <div className="devSkills">
                {devSkills.map(devSkill => {
                    return <img className="devSkill-image" id={devSkill.id} src={devSkill.image} />
                })
                }
            </div>
        </div>

    );

};