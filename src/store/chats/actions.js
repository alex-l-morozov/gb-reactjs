import {ADD_CHAT, DELETE_CHAT, SEND_MESSAGE} from "./actionTypes";
import {AUTHORS} from "../../constants/authors";

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,
    },
});
export const delChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: {
        chatId,
    },
});

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message,
    },
});

let timeout;

export const sendMessageWithReply = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));

    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
            dispatch (
                sendMessage(
                    chatId,
                    {
                        author: AUTHORS.robot,
                        text: "I am a robot. Good Message!"
                    }
                )
            );
        },
        1000
    );
}