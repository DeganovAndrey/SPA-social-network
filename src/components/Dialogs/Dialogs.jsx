import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import sendMessageCreator from "../../redux/dialogs-reducer.js";
import updateNewMessageBodyCreator from "../../redux/dialogs-reducer.js";

//   sendMessageCreator,
//   updateNewMessageBodyCreator,
// } from "../../redux/";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
          <div>
            <textarea
              placeholder="Enter your message"
              onChange={onNewMessageChange}
              value={newMessageBody}
            />
          </div>

          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
