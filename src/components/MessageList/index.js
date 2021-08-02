import React, {useCallback} from 'react';
import {Message} from '../Message';

export const MessageList = ({ messages }) => {

    const renderMessage = useCallback((message) => (
        <Message text={message.text} author={message.author} key={message.id} />
    ), []);

    return messages.map(renderMessage);
}