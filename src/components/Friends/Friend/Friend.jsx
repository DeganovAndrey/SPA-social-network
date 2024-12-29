import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friend.module.css";

const Friend = (props) => {
  let path = "/friends/" + props.id;
  return (
    <div className={s.friend}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Friend;
