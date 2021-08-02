import './App.css';
import {useCallback, useEffect, useState} from "react";
import {ChatList} from "./components/ChatList";
import {MessageList}  from './components/MessageList';
import {MessageForm}  from './components/MessageForm';
import { AUTHORS } from "./constants/authors";
import { CHATS } from "./constants/chats";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

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
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper>
                        <List>
                            <ChatList chats={CHATS} />
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <MessageList messages={messages}></MessageList>
                        <MessageForm onSendMessage={handleSendMessage} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
