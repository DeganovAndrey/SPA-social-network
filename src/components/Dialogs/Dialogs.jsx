import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let letter = newMessageElement.current.value;
    props.updateNewMessageText(letter);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {/* <img
          src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-efvz-p-prikolnie-kartinki-koti-v-shapke-22.jpg"
          alt="ava"
        /> */}
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
        </div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
