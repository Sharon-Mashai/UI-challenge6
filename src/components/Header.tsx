import {useState } from "react";
import logo from "../assets/images/logo.png";
import { HugeiconsIcon } from "@hugeicons/react";
import {Location03Icon,ShoppingCart02Icon} from "@hugeicons/core-free-icons";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
      </button>

      {/* Navigation */}
      <div className={`navLinks ${open ? "show" : ""}`}>

        <nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="headerButtons">

          <button className="iconButton" onClick={() =>alert("Our restaurant is located at 123 Healthy Street, Fresh City.")}>
            <HugeiconsIcon icon={Location03Icon} />
          </button>

          <button className="iconButton" onClick={() => alert("Your shopping cart is currently empty.") }>
            <HugeiconsIcon icon={ShoppingCart02Icon} />
          </button>

        </div>

      </div>

    </header>
  );
};