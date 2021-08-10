import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {persistStore, persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";

const persistConfig = {
    key: 'My-messenger',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);