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
  let dialogs = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Pavel" },
    { id: 3, name: "Sanches" },
    { id: 4, name: "Tatyana" },
    { id: 5, name: "Ivan" },
  ];

  let messages = [
    { id: 1, message: "Hello mister!" },
    { id: 2, message: "You cool!" },
    { id: 3, message: "How much this table?" },
    { id: 4, message: "How are is your name?" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
