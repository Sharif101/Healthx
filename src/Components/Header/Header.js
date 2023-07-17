import React from "react";
import "../../Style.css";
import { NavLink } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import logo from "../../images/stethoscope.png";

const Header = () => {
  let menulist = (
    <React.Fragment>
      <li className="menu-li">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "#14B8B7", borderRadius: "6px" } : {}
          }
        >
          Featured
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink
          to="/aboutus"
          style={({ isActive }) =>
            isActive ? { color: "#14B8B7", borderRadius: "6px" } : {}
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink
          to="/fasilities"
          style={({ isActive }) =>
            isActive ? { color: "#14B8B7", borderRadius: "6px" } : {}
          }
        >
          Fasilities
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink
          to="/findDoctor"
          style={({ isActive }) =>
            isActive ? { color: "#14B8B7", borderRadius: "6px" } : {}
          }
        >
          Find Doctor
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { color: "#14B8B7", borderRadius: "6px" } : {}
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="menu-li">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#14B8B7", borderRadius: "6px" } : {}
          }
        >
          <button className="custom-btn">Book Now</button>
        </NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <nav>
        <div>
          <NavLink className="logo">
            <FaStethoscope />
            WeCare
          </NavLink>
        </div>
        <ul className="menu">{menulist}</ul>
      </nav>
    </div>
  );
};

export default Header;
