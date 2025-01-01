// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

// let store = configureStore(reducers);

// `configureStore` method
//  * of the `@reduxjs/toolkit`

export default store;
