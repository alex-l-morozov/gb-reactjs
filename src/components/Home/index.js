import './style.css';
import React, {useCallback, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {sendMessage, sendMessageWithReply} from "../../store/chats/actions";
import {ChatList} from "../ChatList";
import {AddChat} from "../Chat/AddChat";
import {MessageList}  from '../MessageList';
import {MessageForm}  from '../MessageForm';
//import { AUTHORS } from "../../constants/authors";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import {selectChats} from "../../store/chats/selectors";
import {selectName} from "../../store/profile/selectors";

function Home() {
    const { chatId } = useParams();

    const chats = useSelector(selectChats);
    const userName = useSelector(selectName)
    const dispatch = useDispatch();

    const handleSendMessage = useCallback(
        (newMessage) => {
            dispatch(sendMessageWithReply(chatId, {...newMessage, author: userName}));
        },
        [chatId]
    );

    // useEffect(() => {
    //     if (
    //         !chatId ||
    //         !chats[chatId]?.messages.length ||
    //         chats[chatId].messages[chats[chatId].messages.length - 1].author ===
    //         AUTHORS.robot
    //     ) {
    //         return;
    //     }
    //
    //     const timeout = setTimeout(() => {
    //         const newMessage = {
    //             text: "I am a robot",
    //             author: AUTHORS.robot,
    //             id: Date.now(),
    //         };
    //
    //         handleSendMessage(newMessage);
    //     }, 1000);
    //
    //     return () => clearTimeout(timeout);
    // }, [chats]);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper>
                        <List>
                            <ChatList chats={chats} />
                            <ListItem>
                                <AddChat/>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    {!!chatId && !!chats[chatId] && (
                    <Paper>
                        <MessageList messages={chats[chatId].messages}></MessageList>
                        <MessageForm onSendMessage={handleSendMessage} />
                    </Paper>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
