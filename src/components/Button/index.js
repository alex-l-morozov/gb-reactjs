import React from "react";
import "./styles.css";

export const Button = (props) => {
    return <button className="button" onClick={props.onClick}>{props.children}</button>;
};