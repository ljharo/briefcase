import "../css/NavBar.css";

import {
  getUserDeatil,
  getPresentation,
  getSocialNetwork,
  getCvDetail,
  type UserDto,
  type PresentationDto,
  type SocialNetworkDto,
  type CvDetailDto,
} from "../apis/UserDetail";

import { SocialNetworkBtn } from "./socialNetworBtn";

export function Navbar() {
  const user: UserDto = getUserDeatil();
  const presentation: PresentationDto = getPresentation();
  const socialNetwork: SocialNetworkDto = getSocialNetwork();
  const cv: CvDetailDto = getCvDetail();

  return (
    <>
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h2>{presentation.title}</h2>
          <p className="tagline">{presentation.subTitle}</p>
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

        <a href={cv.filePath} download={cv.fileName} className="download-btn">
          <strong>Download CV</strong>
        </a>

        <SocialNetworkBtn
          instagram={socialNetwork.instagram}
          github={socialNetwork.github}
          facebook={socialNetwork.facebook}
          linkedIn={socialNetwork.linkedIn}
          twitter={socialNetwork.twitter}
        />
      </aside>
    </>
  );
}
