import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Andrey" id="1" />
        <DialogItem name="Pavel" id="2" />
        <DialogItem name="Sanches" id="3" />
        <DialogItem name="Tatyana" id="4" />
        <DialogItem name="Ivan" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hello mister!" />
        <Message message="How are is your name?" />
        <Message message="You cool baby!" />
        <Message message="How much this table?" />
      </div>
    </div>
  );
};

export default Dialogs;
