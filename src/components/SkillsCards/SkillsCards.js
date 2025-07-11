import Skills from './Skills';
import './SkillsCards.css';

function SkillsCards() {
    return (
        <div className="skills-container">
            <div className='myskills'>
                <span>Skills</span>
                {/* <div className='line'></div> */}
            </div>
            <div className="skillCards-container">
                {Skills.map((skill) => {
                    return (
                        <div className="skillCard" >
                            <img src={skill.image} alt={skill.name} />
                            <h3>{skill.name}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsCards;