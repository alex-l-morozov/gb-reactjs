import React, {useCallback} from 'react';
import {Chat} from '../Chat';
import ListItem from "@material-ui/core/ListItem";

export const ChatList = ({ chats }) => {

    const renderChat = useCallback((chat) => (
        <Chat title={chat.name} id={chat.id} key={chat.id} />
    ), []);

    return Object.values(chats).map(renderChat);
}