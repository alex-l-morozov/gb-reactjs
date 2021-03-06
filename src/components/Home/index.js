import "./style.css";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MessageList } from "../MessageList";
import { MessageForm } from "../MessageForm";
import { ChatList } from "../ChatList";
import { selectName } from "../../store/profile/selectors";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import {
  connectChatsToFB,
} from "../../store/chats/actions";
import {
  connectMessagesToFB,
  sendMessageWithFB,
} from "../../store/messages/actions";

function Home() {
  const { chatId } = useParams();

  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const name = useSelector(selectName);

  useEffect(() => {
    dispatch(connectChatsToFB());
    dispatch(connectMessagesToFB());
  }, []);

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithFB(chatId, { ...newMessage, author: name }));
    },
    [chatId, name, dispatch]
  );

  return (
    <div className="root">
      <ChatList chats={chats} />
      {!!chatId && (
        <div>
          <MessageList messages={messages[chatId] || []} />
          <MessageForm onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default Home;
