import './style.css';
import React from "react";

export const Message = ({ text, author }) => (
        <div className="message">
            <span>{author}</span> : {text}
        </div>
);