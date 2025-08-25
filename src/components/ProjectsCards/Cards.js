import { useState } from 'react';
import './ProjectCards.css';

function Cards({ project }) {
  const [expanded, setExpanded] = useState(false);
  const skills = project.skills.join(', ');
  const platform = project.plateform.join(', ');

  // Show only 2 items if not expanded
  const visibleDescription = expanded
    ? project.description
    : project.description.slice(0, 1);

  return (
    <div className="projectCard">
      <div className="projectName">{project.name}</div>
      <div className="projectCardTop1">
        <div className="iframe-container">
          <a
            href={project.page}
            target="_blank"
            rel="noreferrer"
            className="iframe-link-overlay"
            aria-label={`Visit project: ${project.name}`}
          ></a>
          <iframe src={project.page} loading="lazy" title={project.name}>
            Your browser does not support iframes.
          </iframe>
        </div>
        <div>
          <div className="source-links">
            <a href={project.page} target="_blank" rel="noreferrer" className="source-links-content">Demo</a>
            <a href={project.github} target="_blank" rel="noreferrer" className="source-links-content">GitHub</a>
            <a href={project.doc} target="_blank" rel="noreferrer" className="source-links-content">Doc</a>
            <a href={project.figma} target="_blank" rel="noreferrer" className="source-links-content">Figma</a>
            <a href={project.detail} target="_blank" rel="noreferrer" className="source-links-content">Module</a>
          </div>
        </div>
      </div>

      <div className="project-details">
        <div>
          <div className="project-heading">
            <h4>Type: <span>{project.type}</span></h4>
            <h4>Deployed in: <span>{platform}</span></h4>
          </div>
          <h4>Tech Stack: <span className="skills">{skills}</span></h4>
        </div>

        <div>
        <ul className="description">
          {visibleDescription.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        {project.description.length > 1 && (
          <button
            className="toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More..."}
          </button>
        )}
        </div>
      </div>
    </div>
  );
}

export default Cards;