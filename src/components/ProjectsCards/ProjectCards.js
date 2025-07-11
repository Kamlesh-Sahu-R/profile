import projects from './Projects';
import './ProjectCards.css';

function ProjectCards() {
  return (
    <div className="project-container">
      <div className='myproject'><span>My Projects</span></div>
      <div className="projectCard-container">
        {projects.map((project, index) => {
          const skills = project.skills.join(' | ');
          const platform = project.plateform.join(', ');
          return (
            <div className="projectCard" key={index}>
              <div className="iframe-container">
                <a
                    href={project.page}
                    target="_blank"
                    rel="noreferrer"
                    className="iframe-link-overlay"
                    aria-label={`Visit project: ${project.name}`}
                    ></a>
                <iframe
                  src={project.page}
                  loading="lazy"
                  title={project.name}
                >
                  Your browser does not support iframes.
                </iframe>
              </div>
              <div className="project-details">
                <h4>Project Name: <span>{project.name}</span></h4>
                <ul className="description">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <h4>Project Type: <span>{project.type}</span></h4>
                <h4>Deployed in: <span>{platform}</span></h4>
                <h4>Skills Used: <span className="skills">{skills}</span></h4>
                <div className="source-links">
                  <a href={project.page} target="_blank" rel="noreferrer" className="source-links-content">Demo</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="source-links-content">GitHub Repo</a>
                  <a href={project.doc} target="_blank" rel="noreferrer" className="source-links-content">Project Details</a>
                  <a href={project.figma} target="_blank" rel="noreferrer" className="source-links-content">Figma Doc</a>
                  <a href={project.detail} target="_blank" rel="noreferrer" className="source-links-content">Module Details</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCards;
