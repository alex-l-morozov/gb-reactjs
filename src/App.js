import './App.css';
import {useCallback, useEffect, useState} from "react";
import {MessageList}  from './components/MessageList';
import {MessageForm}  from './components/MessageForm'
import { AUTHORS } from "./constants/authors";


function App() {
    const [messages, setMessages] = useState([]);
    const handleSendMessage = useCallback(
        (newMessage) => {
            setMessages([...messages, newMessage]);
        },
        [messages]
    );
    useEffect(() => {
        if (
            !messages.length ||
            messages[messages.length - 1].author === AUTHORS.robot
        ) {
            return;
        }

        const timeout = setTimeout(() => {
            const newMessage = {
                text: "I am a robot!",
                author: AUTHORS.robot,
                id: Date.now(),
            };

            setMessages([...messages, newMessage]);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div className="message-block">
            <div className="message-list">
                <MessageList messages={messages}></MessageList>
            </div>
            <MessageForm onSendMessage={handleSendMessage} />
        </div>
    );
}

export default App;
