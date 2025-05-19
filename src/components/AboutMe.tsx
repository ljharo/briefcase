import "../css/AboutMe.css";

export function AboutMe() {
  return (
    <>
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
    </>
  );
}
