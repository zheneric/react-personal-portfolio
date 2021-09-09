import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <div className="wrapper-text">
          <h1>Hi, I'm Eric 🚀!</h1>
          <h2>A curious, creative, challenge-driven coder.</h2>
          <h3>
            This is still iteration 1 of my personal website and I'm still at a
            relatively early stage in my web development journey, so do excuse
            me if it's not super impressive just yet. But something is better
            than nothing...
          </h3>
        </div>
      </div>
      <a href="#works">
        <ExpandMoreIcon className="arrowDown" />
      </a>
    </div>
  );
}
