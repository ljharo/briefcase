import "../css/App.css";

import { Navbar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";
import { Studies } from "./Estudies";
import { Knowledge } from "./Knowledge";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <div className="container">
        {/* Sidebar/Navigation */}
        <Navbar />

        {/* <!-- Main Content --> */}
        <main className="content">
          <AboutMe />
          <Experience />
          <Studies />
          <Knowledge />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
