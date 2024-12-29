let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, it's my first post", likesCount: 18 },
        { id: 2, message: "Hi, how are you?", likesCount: 45 },
      ],
      newPostText: "I am frontend developer",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hello mister!" },
        { id: 2, message: "You cool!" },
        { id: 3, message: "How much this table?" },
        { id: 4, message: "How are is your name?" },
      ],
      newMessageText: "HALO",
      dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Pavel" },
        { id: 3, name: "Sanches" },
        { id: 4, name: "Tatyana" },
        { id: 5, name: "Ivan" },
      ],
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 55,
        message: this._state.profilePage.newPostText,
        likesCount: 99,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }
    if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    }

    if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newLetter;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;
export default store;

// <img
//   src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-efvz-p-prikolnie-kartinki-koti-v-shapke-22.jpg"
//   alt="ava"
// />;
