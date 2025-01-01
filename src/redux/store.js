import dialogsReducer from "./dialogs-reducer.js";
import profileReducer from "./profile-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";

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

  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;

// <img
//   src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-efvz-p-prikolnie-kartinki-koti-v-shapke-22.jpg"
//   alt="ava"
// />;
