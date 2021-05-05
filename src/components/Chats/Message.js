import style from './Message.module.css'

const Message = (props) => {
    
    let direction;

    switch (props.direction) {

        case "to_me": direction = style.to_me;
        break;

        case "from_me": direction = style.from_me;
        break;

        default: direction = style.to_me;
    }

    return (
        <div className={`${style.msg} ${direction}`}>
            <section>{props.text}</section>
            <section className={style.time}>{props.time}</section>
        </div>
    );
}

export default Message;