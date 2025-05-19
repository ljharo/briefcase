import "../css/Estudies.css";
import { getStudies, type studiesDto } from "../apis/studies";

export function Studies() {
  const studiesList: studiesDto[] = getStudies();

  const studiesItems = studiesList.map((study) => {
    return (
      <>
        <article className="study-item">
          <div className="study-content">
            <h3 className="study-title">{study.title}</h3>
            <h4 className="study-institution">
              <a href={study.url} target="_blank" rel="noopener noreferrer">
                {study.subTitle} • {study.year}
              </a>
            </h4>
            <div className="study-dot"></div>
            <div className="study-line"></div>
          </div>
        </article>
      </>
    );
  });

  return (
    <>
      <section id="studies" className="section">
        <h2 className="section-title">Studies</h2>
        <div className="section-content studies-list">{studiesItems}</div>
      </section>
    </>
  );
}
