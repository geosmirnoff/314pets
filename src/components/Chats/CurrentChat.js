import chat from './CurrentChat.module.css';
import Message from './Message';

const CurrentChat = (props) => {

    let messages = props.current_chat_data.map((msg) => 
    
        <Message text={msg.text}
                 time={msg.time}
            direction={msg.direction} />
    );

    return (
        <div className={chat.wrapper}>
            <div className={chat.companion}>
                <img src={props.companion_img} alt="companion" />
                <p>{props.companion_name}</p>
            </div>
            <div className={chat.chat} id="chat">

                { messages }
                {/* <Message text={chat_data[0].text}
                         time={chat_data[0].time}
                    direction={chat_data[0].direction} /> */}
            </div>
            <div className={chat.send_msg}>
                <input type="text" className={chat.msg_field} />
                <button className={chat.send_btn}>Отправить</button>
            </div>
        </div>
    );
}

export default CurrentChat;