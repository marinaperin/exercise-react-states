import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [changeableClass, setNewClass] = useState("light");

  let roomHref;
  let roomBio;
  if (changeableClass === "light") {
    roomHref = "/light.jpg";
    roomBio = "Light Interior";
  } else {
    roomHref = "/dark.jpg";
    roomBio = "Dark Interior";
  }

  return (
    <>
      <Navbar
        logoSrc={
          "https://www.creativefabrica.com/wp-content/uploads/2020/07/16/castle-logo-design-palace-logo-fortres-Graphics-4640365-1.jpg"
        }
        logoAlt="logo"
        changingClass={changeableClass}
        setClass={() => {
          {
            if (changeableClass === "light") {
              setNewClass("dark");
            } else {
              setNewClass("light");
            }
          }
        }}
        links={[
          {
            name: "Home",
            url: "/home",
          },
          {
            name: "About",
            url: "/about",
          },
          {
            name: "Contacts",
            url: "/contacts",
          },
          {
            name: "Stay With Us",
            url: "/stay-with-us",
          },
        ]}
      />
      <Header
        roomUrl={roomHref}
        roomAlt={roomBio}
        changingClass={changeableClass}
        title="Our Castle invites you to explore our rooms"
        description="You will enjoy a once in a lifetime experience.."
        btnText='Explore Our Rooms'
        invite="Try changing mode with the apposite button and you will understand.."
      />
    </>
  );
}

export default App;
