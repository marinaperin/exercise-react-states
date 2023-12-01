import "./Navbar.css";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function ({ logoSrc, logoAlt, links, oldClass, newClass }) {
  let icon;
  if (oldClass === "light") {
    icon = <MdDarkMode />;
  } else {
    icon = <MdLightMode />;
  }
  return (
    <nav className={oldClass}>
      <figure>
        <img src={logoSrc} alt={logoAlt} className={oldClass} />
      </figure>
      <menu>
        {links.map(({ name, url }) => (
          <li key={name}>
            <a href={url} className={oldClass}>
              {name}
            </a>
          </li>
        ))}
        <li>
          <button onClick={newClass} className={oldClass}>
            <a>{icon}</a>
          </button>
        </li>
      </menu>
    </nav>
  );
}
