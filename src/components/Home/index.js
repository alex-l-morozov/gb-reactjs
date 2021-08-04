import './style.css';
import {useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {ChatList} from "../ChatList";
import {MessageList}  from '../MessageList';
import {MessageForm}  from '../MessageForm';
import { AUTHORS } from "../../constants/authors";
import { CHATS } from "../../constants/chats";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

const initialChats = {
    auto: {
        code: "auto",
        name: "Auto",
        messages: [
            { text: "Welcome, Chat Auto", author: AUTHORS.robot, id: Date.now() }
        ],
    },
    books: {
        code: "books",
        name: "Books",
        messages: [
            { text: "Welcome, Chat Books", author: AUTHORS.robot, id: Date.now() },
        ],
    },
    phone: {
        code: "phone",
        name: "Phone",
        messages: []
    },
    other: {
        code: "other",
        name: "Other",
        messages: []
    },
    music: {
        code: "music",
        name: "Music",
        messages: []
    },
    films: {
        code: "films",
        name: "Films",
        messages: []
    },
};

function Home() {
    const { chatCode } = useParams();

    const [chats, setChats] = useState(initialChats);

    const handleSendMessage = useCallback(
        (newMessage) => {
            // setMessages([...messages, newMessage]);
            setChats({
                ...chats,
                [chatCode]: {
                    ...chats[chatCode],
                    messages: [...chats[chatCode].messages, newMessage],
                },
            });
        },
        [chats, chatCode]
    );

    useEffect(() => {
        if (
            !chatCode ||
            !chats[chatCode]?.messages.length ||
            chats[chatCode].messages[chats[chatCode].messages.length - 1].author ===
            AUTHORS.robot
        ) {
            return;
        }

        const timeout = setTimeout(() => {
            const newMessage = {
                text: "I am a robot",
                author: AUTHORS.robot,
                id: Date.now(),
            };

            handleSendMessage(newMessage);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [chats]);

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
                    {!!chatCode && !!initialChats[chatCode] && (
                    <Paper>
                        <MessageList messages={chats[chatCode].messages}></MessageList>
                        <MessageForm onSendMessage={handleSendMessage} />
                    </Paper>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
