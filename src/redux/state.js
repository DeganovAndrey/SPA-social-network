const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, it's my first post", likesCount: 18 },
        { id: 2, message: "Hi, how are you?", likesCount: 45 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD_POST") {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likesCount: 99,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }

    if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }

    if (action.type === "SEND_MESSAGE") {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.messages.push({ id: 7, message: body });
      this._state.dialogsPage.newMessageBody = "";
      this._callSubscriber(this._state);
    }

    if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

window.store = store;
export default store;

// <img
//   src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-efvz-p-prikolnie-kartinki-koti-v-shapke-22.jpg"
//   alt="ava"
// />;
