import { combineReducers, createStore } from "redux";
import { chatReducer } from "./chat-reducer";
import { friendsReducer } from "./friends-reducer";
import { profileReducer } from "./profile-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    chats:chatReducer,
    friends: friendsReducer
})

let store = createStore(reducers);

export default store;