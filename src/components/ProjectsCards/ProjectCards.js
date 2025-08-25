
import projects from './Projects';
import Cards from './Cards';
import './ProjectCards.css';

function ProjectCards() {
  return (
    <div id="projects" className="project-container">
      <div className="myproject">My Projects</div>
      <div className="projectCard-container">
        {projects.map((project, index) => (
          <Cards key={index} project={project} />
        ))}
      </div>
    </div>
  );
}



export default ProjectCards;
