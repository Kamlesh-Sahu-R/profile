import { useState, useEffect } from "react";
import projects from "./Projects";
import "./ProjectCarousel.css";


function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  // auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // smoother, slower
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const getTranslateZ = () => {
  if (window.innerWidth < 480) return 180;  // Mobile
  if (window.innerWidth < 768) return 400;  // Tablet
  return 580;  // Desktop
};

  return (
    <div id="projects" className="carousel-container">
      <div className="carousel">
        {projects.map((project, index) => {
          const offset = (index - current + projects.length) % projects.length;
          const angle = (360 / projects.length) * offset;
          return (
            <div
              key={index}
              className={`carousel-card ${index === current ? "active" : ""}`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(${getTranslateZ()}px)`,
              }}
            >
              <div className="projectCard1">
                <div className="projectName1">{project.name}</div>
                  {/* <div className="projectCardTop1"> */}
                    <div className="iframe-container1">
                      <a
                        href={project.page}
                        target="_blank"
                        rel="noreferrer"
                        className="iframe-link-overlay1"
                        aria-label={`Visit project: ${project.name}`}
                      ></a>
                      <iframe src={project.page} loading="lazy" title={project.name}>
                        Your browser does not support iframes.
                      </iframe>
                    </div>
                  <div>
                    <div className="source-links1">
                      <a href={project.page} target="_blank" rel="noreferrer" className="source-links-content1">Demo</a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="source-links-content1">GitHub</a>
                      {/* <a href={project.detail} target="_blank" rel="noreferrer" className="source-links-content1">Module</a> */}
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button className="nav-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-btn next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots for direct navigation */}
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
