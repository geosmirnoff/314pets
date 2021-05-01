import msg from './Message.module.css'

const Message = (props) => {
    
    let direction;

    switch (props.direction) {

        case "to_me": direction = msg.to_me;
        break;

        case "from_me": direction = msg.from_me;
        break;

        default: direction = msg.to_me;
    }

    return (
        <div className={`${msg.msg} ${direction}`}>
            <section>{props.text}</section>
            <section className={msg.time}>{props.time}</section>
        </div>
    );
}

export default Message;