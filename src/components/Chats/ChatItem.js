import { NavLink } from 'react-router-dom';
import style from './ChatItem.module.css';

const ChatItem = (props) => {

    const url = "/chats/";

    return (
        <NavLink to={`${url}${props.from_id}`} activeClassName={style.active}>
            <div className={style.item}>
                <div className={style.from_img}>
                    <img src={props.from_img} alt="avatar" />
                </div>
                <div className={style.from_name}>{props.from_name}</div>
                <div className={style.text}>{props.text}</div>
                <div className={style.date}>{props.date}</div>
            </div>
        </NavLink>
    );
}

export default ChatItem;