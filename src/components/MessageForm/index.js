import './style.css';
import {TextField, Button} from "@material-ui/core";
// import Icon from '@material-ui/core/Icon';
import React, {useState, useRef, useEffect} from 'react';
import { AUTHORS } from '../../constants/authors';

export const MessageForm = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSendMessage({
            //author: AUTHORS.human,
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <h4>Отправить сообщение:</h4>
            <TextField inputRef={input => input && input.focus()} value={value} onChange={handleChange} />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Send
            </Button>
        </form>
    )
}