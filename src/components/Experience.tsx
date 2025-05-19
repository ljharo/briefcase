import "../css/Experience.css";

export function Experience() {
  return (
    <>
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-container">
          <details className="experience-item">
            <summary className="experience-summary">
              <a
                className="experience-link"
                href="https://www.pagochinchin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Pago Chinchin</h3>
              </a>
              <span className="experience-icon">+</span>
            </summary>
            <div className="experience-content">
              <h4>QA (Quality analyst) - 2022</h4>
              <p>
                responsible for guaranteeing the quality of the software by
                conducting manual and automated tests, error identification,
                documentation of results and collaboration with development
                equipment to improve processes and ensure that the product meets
                the required standards.
              </p>
            </div>
          </details>

          <details className="experience-item">
            <summary className="experience-summary">
              <a
                className="experience-link"
                href="https://www.deloitte.com/latam/es/about/story/nuestros-marketplaces/deloitte-venezuela.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Deloitte</h3>
              </a>
              <span className="experience-icon">+</span>
            </summary>
            <div className="experience-content">
              <h4>Risk Analyst - 2023</h4>
              <p>
                Identification and Evaluation Risks in IT systems, developing
                mitigation and coordinates audit strategies. The objective is to
                ensure that the organization complies with regulations and
                protects its assets, communicating findings and recommendations
                to senior management to improve risk management.
              </p>
            </div>
          </details>

          <details className="experience-item">
            <summary className="experience-summary">
              <a
                className="experience-link"
                href="https://hi4.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>HI4AI</h3>
              </a>
              <span className="experience-icon">+</span>
            </summary>
            <div className="experience-content">
              <h4>Backend AI Developer - 2023</h4>
              <p>
                As Backend Developer, design and development the logic of the
                server and the databases that support the applications. I take
                care of creating APIS, optimizing performance and ensuring data
                security. I work in close collaboration with the Fronte team to
                ensure fluid and efficient integration.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
