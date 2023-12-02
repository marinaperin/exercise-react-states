import "./Navbar.css";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function ({ logoSrc, logoAlt, links, changingClass, setClass }) {
  let icon;
  if (changingClass === "light") {
    icon = <MdDarkMode />;
  } else {
    icon = <MdLightMode />;
  }
  return (
    <nav className={changingClass}>
      <figure>
        <img src={logoSrc} alt={logoAlt} className={changingClass} />
      </figure>
      <menu>
        {links.map(({ name, url }) => (
          <li key={name}>
            <a href={url} className={changingClass}>
              {name}
            </a>
          </li>
        ))}
        <li id="mode-li">
          <p id="try-me" className={changingClass}>Try me</p>
          <button onClick={setClass} className={changingClass}>
            <a id="icon-btn">{icon}</a>
          </button>
        </li>
      </menu>
    </nav>
  );
}
