import './Message.css';

function Message(props) {
    //console.log(props.message);
    return (
        <div className="Message">{props.message}</div>
    );
}

export default Message;