import './style.css';
import React, {useState, useRef} from 'react';
import { AUTHORS } from '../../constants/authors';

export const MessageForm = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSendMessage({
            author: AUTHORS.human,
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Отправить сообщение:</h4>
            <textarea ref={inputRef}  value={value} onChange={handleChange} /><br />
            <input type="submit" />
        </form>
    )
}