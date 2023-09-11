import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import "./styles.css";

function App() {
  return (
    <div>
      <ProfileCard
        name="Jack Hammer"
        tagline="I build awesome web applications"
      />
      <Work>
        <WorkItem company="Microsoft" from="Jan 2020" until="May 2021" />
        <WorkItem company="Netflix" from="Jun 2021" until="Dec 2021" />
        <WorkItem company="Google" from="Jan 2022" until="Present" />
      </Work>
      <PortFolio>
        <Project projectImage="https://picsum.photos/id/0/200/300" />
        <Project projectImage="https://picsum.photos/id/36/200/300" />
        <Project projectImage="https://picsum.photos/id/60/200/300" />
        <Project projectImage="https://picsum.photos/id/63/200/300" />
      </PortFolio>
    </div>
  );
}

function ProfileCard(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="" />
      </div>
      <div className="profile">
        <p>Hi, I'm {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function Work(props) {
  return (
    <div>
      <h2>Work history</h2>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function WorkItem(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.company}</span>
        <span className="from">From: {props.from}</span>
        <span className="until">To: {props.until}</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </li>
  );
}

function PortFolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="project">
      <div className="project-image">
        <img src={props.projectImage} alt="" />
      </div>
      <div className="project-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
