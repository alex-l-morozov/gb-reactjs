import React, {useCallback} from 'react';
import {Chat} from '../Chat';

export const ChatList = ({ chats }) => {

    const renderChat = useCallback((chat) => (
        <Chat title={chat.title} code={chat.code} key={chat.id} />
    ), []);

    return chats.map (renderChat);
}