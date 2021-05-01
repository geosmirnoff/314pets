import item from './ChatItem.module.css';

const ChatItem = (props) => {
    return (
        <div className={item.item}>
            <div className={item.from_img}>
                <img src={props.from_img} alt="avatar" />
            </div>
            <div className={item.from_name}>{props.from_name}</div>
            <div className={item.text}>{props.text}</div>
            <div className={item.date}>{props.date}</div>
        </div>
    );
}

export default ChatItem;