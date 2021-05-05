import style from './CurrentChat.module.css';
import Message from './Message';

const CurrentChat = (props) => {

    let messages = props.current_chat_data.map((msg) => 
    
        <Message text={msg.text}
                 time={msg.time}
            direction={msg.direction} />
    );

    return (
        <div className={style.wrapper}>
            <div className={style.companion}>
                <img src={props.companion_img} alt="companion" />
                <p>{props.companion_name}</p>
            </div>
            <div className={style.chat} id="chat">

                { messages }
                {/* <Message text={chat_data[0].text}
                         time={chat_data[0].time}
                    direction={chat_data[0].direction} /> */}
            </div>
            <div className={style.send_msg}>
                <input type="text" className={style.msg_field} />
                <button className={style.send_btn}>Отправить</button>
            </div>
        </div>
    );
}

export default CurrentChat;