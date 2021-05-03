import { NavLink } from 'react-router-dom';
import item from './ChatItem.module.css';

const ChatItem = (props) => {

    const url = "/chats/";

    return (
        <NavLink to={`${url}${props.from_id}`} activeClassName={item.active}>
            <div className={item.item}>
                <div className={item.from_img}>
                    <img src={props.from_img} alt="avatar" />
                </div>
                <div className={item.from_name}>{props.from_name}</div>
                <div className={item.text}>{props.text}</div>
                <div className={item.date}>{props.date}</div>
            </div>
        </NavLink>
    );
}

export default ChatItem;