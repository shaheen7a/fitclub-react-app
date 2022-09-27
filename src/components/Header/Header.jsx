import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
              activeClass={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Why us
            </Link>
          </li>

          <li>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </Link>
          </li>

          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
