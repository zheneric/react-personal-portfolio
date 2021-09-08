import "./menu.scss";
import MenuItem from "./menuItem/MenuItem";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <MenuItem setMenuOpen={setMenuOpen}>
          <a href="#intro">Home</a>
        </MenuItem>
        <MenuItem setMenuOpen={setMenuOpen}>
          <a href="#portfolio">Portfolio</a>
        </MenuItem>
        <MenuItem setMenuOpen={setMenuOpen}>
          <a href="#works">Works</a>
        </MenuItem>
        <MenuItem setMenuOpen={setMenuOpen}>
          <a href="#contact">Contact</a>
        </MenuItem>
      </ul>
    </div>
  );
}
