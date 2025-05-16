import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        {/* Sidebar/Navigation */}
        <aside className="sidebar">
          <header className="sidebar-header">
            <h1>Luis Haro</h1>
            <h2>Backend Developer</h2>
            <p className="tagline">
              We create the critical infrastructure that sustains the solutions
              of the future
            </p>
          </header>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#about" className="nav-link active">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a href="#studies" className="nav-link">
                  Studies
                </a>
              </li>
              <li className="nav-item">
                <a href="#knowledge" className="nav-link">
                  Knowledge
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- boton para descargar cv --> */}
          <a
            href="documents/CV Luis Haro - EN.pdf"
            download="CV Luis Haro.pdf"
            className="download-btn"
          >
            <strong>Download CV</strong>
          </a>

          <div className="social-container">
            <ul className="social-links">
              <li className="social-links__item">
                <a
                  className="social-links__link"
                  href="https://github.com/ljharo"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub (opens in a new tab)"
                  title="GitHub"
                >
                  <span className="visually-hidden">GitHub</span>
                  <svg
                    className="social-links__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>

              <li className="social-links__item">
                <a
                  className="social-links__link"
                  href="https://www.linkedin.com/in/luis-haro-bba6b522a/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                  title="LinkedIn"
                >
                  <span className="visually-hidden">LinkedIn</span>
                  <svg
                    className="social-links__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>

              <li className="social-links__item">
                <a
                  className="social-links__link"
                  href="https://instagram.com/haroomg33"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram (opens in a new tab)"
                  title="Instagram"
                >
                  <span className="visually-hidden">Instagram</span>
                  <svg
                    className="social-links__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* <!-- Main Content --> */}
        <main className="content">
          <section id="about" className="section">
            <h2 className="section-title">About me</h2>
            <div className="section-content">
              {/* <!-- Bloque de código Python --> */}
              <div className="code-block">
                <pre>
                  <code>
                    <span className="code-comment">
                      # Backend Engineering Profile
                    </span>
                    <span className="code-keyword">class</span>{" "}
                    <span className="code-class">LuisHaro</span>:
                    <span className="code-keyword">def</span>{" "}
                    <span className="code-function">__init__</span>(
                    <span className="code-var">self</span>):
                    <span className="code-var">self</span>.
                    <span className="code-var">name</span> ={" "}
                    <span className="code-string">"Luis Haro"</span>
                    <span className="code-var">self</span>.
                    <span className="code-var">role</span> ={" "}
                    <span className="code-string">"Backend Developer"</span>
                    <span className="code-var">self</span>.
                    <span className="code-var">specialties</span> = [
                    <span className="code-string">"System Architecture"</span>,
                    <span className="code-string">"API Design"</span>,
                    <span className="code-string">"Cloud Solutions"</span>]
                    <span className="code-var">self</span>.
                    <span className="code-var">stack</span> = [
                    <span className="code-string">"Python"</span>,{" "}
                    <span className="code-string">"Django"</span>,{" "}
                    <span className="code-string">"Flask"</span>,
                    <span className="code-string">"PostgreSQL"</span>,{" "}
                    <span className="code-string">"Docker"</span>]
                    <span className="code-keyword">def</span>{" "}
                    <span className="code-function">philosophy</span>(
                    <span className="code-var">self</span>):
                    <span className="code-keyword">return</span>{" "}
                    <span className="code-string">
                      "Building scalable foundations for digital innovation"
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </section>

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
                    equipment to improve processes and ensure that the product
                    meets the required standards.
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
                    Identification and Evaluation Risks in IT systems,
                    developing mitigation and coordinates audit strategies. The
                    objective is to ensure that the organization complies with
                    regulations and protects its assets, communicating findings
                    and recommendations to senior management to improve risk
                    management.
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
                    As Backend Developer, design and development the logic of
                    the server and the databases that support the applications.
                    I take care of creating APIS, optimizing performance and
                    ensuring data security. I work in close collaboration with
                    the Fronte team to ensure fluid and efficient integration.
                  </p>
                </div>
              </details>
            </div>
          </section>

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
                  <h3 className="study-title">
                    Master in Artificial Intelligence
                  </h3>
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

          <section id="knowledge" className="section">
            <h2 className="section-title">Knowledge</h2>
            <div className="knowledge-section">
              <h3 className="knowledge-subtitle">Languages</h3>
              <ul className="knowledge-list">
                <li className="knowledge-item">
                  <a
                    href="http://www.python.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=py"
                      alt="Python"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Python</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://www.rust-lang.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=rust"
                      alt="Rust"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Rust</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=js"
                      alt="JavaScript"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">JavaScript</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://www.typescriptlang.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=ts"
                      alt="TypeScript"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">TypeScript</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://en.cppreference.com/w/c/language"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=c"
                      alt="C Language"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">C</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://go.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=go"
                      alt="Go"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Go</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="knowledge-section">
              <h3 className="knowledge-subtitle">Databases</h3>
              <ul className="knowledge-list">
                <li className="knowledge-item">
                  <a
                    href="https://www.postgresql.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=postgres"
                      alt="postgresql"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">POstgresql</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://www.mysql.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=mysql"
                      alt="mysql"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">mysql</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://www.mongodb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=mongo"
                      alt="mongodb"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Mongodb</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="knowledge-section">
              <h3 className="knowledge-subtitle">Backend</h3>
              <ul className="knowledge-list">
                <li className="knowledge-item">
                  <a
                    href="http://www.djangoproject.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=django"
                      alt="Django"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Django</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://nestjs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=nest"
                      alt="NestJS"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">NestJS</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://fastapi.tiangolo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=fastapi"
                      alt="FastAPI"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">FastAPI</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://flask.palletsprojects.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=flask"
                      alt="Flask"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Flask</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="knowledge-section">
              <h3 className="knowledge-subtitle">Frontend</h3>
              <ul className="knowledge-list">
                <li className="knowledge-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/HTML"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=html"
                      alt="htlm"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">HTML</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=css"
                      alt="Css"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Css</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://es.react.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=react"
                      alt="FastAPI"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">React</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="knowledge-section devops-section">
              <h3 className="knowledge-subtitle">Dev Box</h3>
              <ul className="knowledge-list">
                <li className="knowledge-item">
                  <a
                    href="https://www.docker.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=docker"
                      alt="Docker"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Docker</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://aws.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=aws"
                      alt="AWS"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">AWS</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://kubernetes.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=kubernetes"
                      alt="Kubernetes"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Kubernetes</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="knowledge-section tools-section">
              <h3 className="knowledge-subtitle">Others</h3>
              <ul className="knowledge-list">
                <li className="knowledge-item">
                  <a
                    href="https://git-scm.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=git"
                      alt="Git"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Git</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="GitHub"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">GitHub</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=nodejs"
                      alt="Node.js"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Node.js</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://www.linux.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=linux"
                      alt="Linux"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Linux</span>
                  </a>
                </li>
                <li className="knowledge-item">
                  <a
                    href="https://www.selenium.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knowledge-link"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=selenium"
                      alt="Selenium"
                      className="knowledge-icon"
                    />
                    <span className="knowledge-tooltip">Selenium</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="contact" className="section">
            <h2 className="section-title">Contact</h2>
            <div className="section-content contact-container">
              <div className="contact-info">
                <h3>Get in touch</h3>
                <p className="contact-description">
                  Whether you have a question or just want to greet, I will do
                  my best to answer!
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                      />
                    </svg>
                    <a href="mailto:haroomg@gmail.com" target="_blank">
                      haroomg@gmail.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                      />
                    </svg>
                    <a href="tel:+584241234567">+58 424 1234567</a>
                  </div>
                </div>

                <div className="social-links">
                  <a
                    href="https://github.com/ljharo"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                  >
                    <svg className="social-icon" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/luis-haro-bba6b522a/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                  >
                    <svg className="social-icon" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <form
                className="contact-form"
                action="https://formspree.io/f/your-form-id"
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
