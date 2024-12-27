import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi, it's my first post", likesCount: 18 },
  { id: 2, message: "Hi, how are you?", likesCount: 45 },
];

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
