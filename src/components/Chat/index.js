import './style.css';
import React from "react";
import {Link} from "react-router-dom"
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

export const Chat = ({ title, code, id }) => (
    <ListItem button>
           <Link to={`/home/${code}`}> {title}</Link>
    </ListItem>
);