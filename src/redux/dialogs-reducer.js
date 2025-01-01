const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  messages: [
    { id: 1, message: "Hello mister!" },
    { id: 2, message: "You cool!" },
    { id: 3, message: "How much this table?" },
    { id: 4, message: "How are is your name?" },
  ],
  dialogs: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Pavel" },
    { id: 3, name: "Sanches" },
    { id: 4, name: "Tatyana" },
    { id: 5, name: "Ivan" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 7, message: body });
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
// export default sendMessageCreator;
// export default updateNewMessageBodyCreator;
