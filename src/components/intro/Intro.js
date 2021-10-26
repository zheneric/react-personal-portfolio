import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <div className="wrapper-text">
          <h1>👋 Hello World! I'm Eric - </h1>
          <h2>
            a pre-penultimate student at UNSW who is passionate about product,
            tech, and startups.
          </h2>
        </div>
      </div>
      <a href="#works">
        <ExpandMoreIcon className="arrowDown" />
      </a>
    </div>
  );
}
