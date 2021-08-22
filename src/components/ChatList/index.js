import React, { useContext } from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddChat } from "../Chat/AddChat";
import { Chat } from "../Chat";

export const ChatList = ({ chats, onDeleteChat, onAddChat }) => {
  return (
    <>
      <List>
        {Object.values(chats).map((c) => (
          <Chat
            name={c.name}
            key={c.id}
            id={c.id}
            onDelete={onDeleteChat}
          />
        ))}
        <ListItem>
          <AddChat onAddChat={onAddChat} />
        </ListItem>
      </List>
    </>
  );
};

