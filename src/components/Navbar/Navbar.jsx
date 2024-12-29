import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleActive = ({ isActive }) =>
    isActive ? { color: "gold", textDecoration: "none" } : {};

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="profile"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={styleActive}
        >
          Profile
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="dialogs"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={styleActive}
        >
          Messages
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="news"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={styleActive}
        >
          News
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="music"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={styleActive}
        >
          Music
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="settings"
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          style={styleActive}
        >
          Settings
        </NavLink>
        <div className={s.item}>
          <NavLink to="friends" style={styleActive}>
            Friends
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
