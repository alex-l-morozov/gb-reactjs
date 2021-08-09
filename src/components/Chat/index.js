import './style.css';
// import React, {useState} from "react";
import {Link} from "react-router-dom"
import ListItem from '@material-ui/core/ListItem';
import {delChat} from "../../store/chats/actions";
import {useDispatch} from "react-redux";
// import ListItemText from '@material-ui/core/ListItemText';

export const Chat = ({ title, id }) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        dispatch(delChat(e.target.value));
    };

    return (
        <ListItem>
            <Link to={`/home/${id}`}> {title}</Link>
            <button className="del" value={id} onClick={handleDelete}>Delete</button>
        </ListItem>
    )
};