import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  let friends = props.state.dialogs.map((f) => (
    <Friend key={f.id} name={f.name} id={f.id} />
  ));
  return (
    <div className={s.friends}>
      <h3> My friends </h3>
      <div className={s.friendsItems}>{friends}</div>
    </div>
  );
};

export default Friends;
