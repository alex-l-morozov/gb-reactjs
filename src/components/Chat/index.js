import './style.css';
import React from "react";
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

export const Chat = ({ title, code, id }) => (
    <ListItem button>
            {title}
    </ListItem>
);