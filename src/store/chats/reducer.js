import { AUTHORS } from "../../constants/authors";
import {ADD_CHAT, DELETE_CHAT, SEND_MESSAGE} from "./actionTypes";

const initialState = {
    auto: {
        id: "auto",
        name: "Auto",
        messages: [
            { text: "Welcome, Chat Auto", author: AUTHORS.robot, id: "auto-1" }
        ],
    },
    books: {
        id: "books",
        name: "Books",
        messages: [
            { text: "Welcome, Chat Books", author: AUTHORS.robot, id: "books-1" },
        ],
    },
    phone: {
        id: "phone",
        name: "Phone",
        messages: []
    },
    other: {
        id: "other",
        name: "Other",
        messages: []
    },
    music: {
        id: "music",
        name: "Music",
        messages: []
    },
    films: {
        id: "films",
        name: "Films",
        messages: []
    },
};

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: [],
                },
            };
        }
        case DELETE_CHAT: {
            delete state[payload.chatId]
            return {
                ...state,
            };
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message],
                },
            };
        }
        default:
            return state;
    }
};