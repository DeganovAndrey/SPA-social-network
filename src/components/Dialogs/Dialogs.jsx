import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
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
          <textarea ref={newMessageElement}></textarea>
        </div>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
