import "../css/Estudies.css";

export function Studies() {
  return (
    <>
      <section id="studies" className="section">
        <h2 className="section-title">Studies</h2>
        <div className="section-content studies-list">
          <article className="study-item">
            <div className="study-content">
              <h3 className="study-title">Computer Engineering</h3>
              <h4 className="study-institution">
                <a
                  href="https://www.unihumboldt.edu.ve"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Universidad Alejandro de Humboldt • 2018 - 2022
                </a>
              </h4>
              <div className="study-dot"></div>
              <div className="study-line"></div>
            </div>
          </article>

          <article className="study-item">
            <div className="study-content">
              <h3 className="study-title">Master in Artificial Intelligence</h3>
              <h4 className="study-institution">
                <a
                  href="https://www.ceupe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CEUPE • 2023 - 2024
                </a>
              </h4>
              <div className="study-dot"></div>
              <div className="study-line"></div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
