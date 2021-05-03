import chat from './CurrentChat.module.css';
import Message from './Message';

const CurrentChat = (props) => {
    
    let chat_data = [
        {
            text: "Дороу",
            time: "17:58",
            direction: "to_me"
        },
        {
            text: "Дратути",
            time: "17:59",
            direction: "from_me"
        },
        {
            text: "Как жись?",
            time: "18:05",
            direction: "to_me"
        },
        {
            text: "Намана",
            time: "18:06",
            direction: "from_me"
        },
        {
            text: "Што делоиш?",
            time: "18:06",
            direction: "to_me"
        },
        {
            text: "Кушою",
            time: "18:07",
            direction: "from_me"
        },
        {
            text: "Панятна",
            time: "18:14",
            direction: "to_me"
        }
    ]

    return (
        <div className={chat.wrapper}>
            <div className={chat.companion}>
                <img src={props.companion_img} alt="companion" />
                <p>{props.companion_name}</p>
            </div>
            <div className={chat.chat} id="chat">
                <Message text={chat_data[0].text}
                         time={chat_data[0].time}
                    direction={chat_data[0].direction} />
                
                <Message text={chat_data[1].text}
                         time={chat_data[1].time}
                    direction={chat_data[1].direction} />
                
                <Message text={chat_data[2].text}
                         time={chat_data[2].time}
                    direction={chat_data[2].direction} />
                
                <Message text={chat_data[3].text}
                         time={chat_data[3].time}
                    direction={chat_data[3].direction} />
                
                <Message text={chat_data[4].text}
                         time={chat_data[4].time}
                    direction={chat_data[4].direction} />
                
                <Message text={chat_data[5].text}
                         time={chat_data[5].time}
                    direction={chat_data[5].direction} />
                
                <Message text={chat_data[6].text}
                         time={chat_data[6].time}
                    direction={chat_data[6].direction} />
            </div>
            <div className={chat.send_msg}>
                <input type="text" className={chat.msg_field} />
                <button className={chat.send_btn}>Отправить</button>
            </div>
        </div>
    );
}

export default CurrentChat;