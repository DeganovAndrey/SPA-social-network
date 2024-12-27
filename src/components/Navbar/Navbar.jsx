import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="profile"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={({ isActive }) =>
            isActive ? { color: "gold", textDecoration: "none" } : {}
          }
        >
          Profile
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="dialogs"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={({ isActive }) =>
            isActive ? { color: "gold", textDecoration: "none" } : {}
          }
        >
          Messages
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="news"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={({ isActive }) =>
            isActive ? { color: "gold", textDecoration: "none" } : {}
          }
        >
          News
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="music"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={({ isActive }) =>
            isActive ? { color: "gold", textDecoration: "none" } : {}
          }
        >
          Music
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="settings"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={({ isActive }) =>
            isActive ? { color: "gold", textDecoration: "none" } : {}
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
