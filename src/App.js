import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
                // updateNewMessageText={props.updateNewMessageText}
              />
            }
          />
          {/* <>
              <Route path="/dialogs/1" element={<Dialogs />} />
              <Route path="/dialogs/2" element={<Dialogs />} />
              <Route path="/dialogs/3" element={<Dialogs />} />
              <Route path="/dialogs/4" element={<Dialogs />} />
              <Route path="/dialogs/5" element={<Dialogs />} />
            </> */}
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="/friends"
            element={<Friends state={props.state.dialogsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
