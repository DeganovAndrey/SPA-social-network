let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, it's my first post", likesCount: 18 },
      { id: 2, message: "Hi, how are you?", likesCount: 45 },
    ],
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
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 55,
    message: postMessage,
    likesCount: 99,
  };
  state.profilePage.posts.push(newPost);
};

export default state;

// <img
//   src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-efvz-p-prikolnie-kartinki-koti-v-shapke-22.jpg"
//   alt="ava"
// />;
