let rerenderEntireTree = () => {
  console.log("State changed");
};

let state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 55,
    message: state.profilePage.newPostText,
    likesCount: 99,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = updateNewPostText("");
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = updateNewMessageText("");
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newLetter) => {
  state.dialogsPage.newMessageText = newLetter;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;

// <img
//   src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-efvz-p-prikolnie-kartinki-koti-v-shapke-22.jpg"
//   alt="ava"
// />;
