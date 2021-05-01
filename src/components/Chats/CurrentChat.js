import chat from './CurrentChat.module.css';
import Message from './Message';

const CurrentChat = (props) => {
    return (
        <div className={chat.wrapper}>
            <div className={chat.companion}>
                <img src={props.companion_img} alt="companion" />
                <p>{props.companion_name}</p>
            </div>
            <div className={chat.chat} id="chat">
                <Message text="Дороу" time="17:58" direction="to_me" />
                <Message text="Дратути" time="17:59" direction="from_me" />
                <Message text="Как жись?" time="18:05" direction="to_me" />
                <Message text="Намана" time="18:06" direction="from_me" />
                <Message text="Што делоиш?" time="18:06" direction="to_me" />
                <Message text="Кушою" time="18:07" direction="from_me" />
                <Message text="Панятна" time="18:14" direction="to_me" />
            </div>
            <div className={chat.send_msg}>
                <input type="text" className={chat.msg_field} />
                <button className={chat.send_btn}>Отправить</button>
            </div>
        </div>
    );
}

export default CurrentChat;