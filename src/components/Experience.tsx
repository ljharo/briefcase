import "../css/Experience.css";

import { getExperience, type ExperienceDto } from "../apis/Experience";

export function Experience() {
  const experience: ExperienceDto[] = getExperience();

  const experienceSection = experience.map((item) => {
    return (
      <>
        <details className="experience-item">
          <summary className="experience-summary">
            <a
              className="experience-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{item.title}</h3>
            </a>
            <span className="experience-icon">+</span>
          </summary>
          <div className="experience-content">
            <h4>{item.subTitle}</h4>
            <p>{item.description}</p>
          </div>
        </details>
      </>
    );
  });

  return (
    <>
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-container">{experienceSection}</div>
      </section>
    </>
  );
}
