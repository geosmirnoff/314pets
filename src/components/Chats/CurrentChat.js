import style from './CurrentChat.module.css';
import Message from './Message';
import React from 'react';

const CurrentChat = (props) => {

    let messages = props.current_chat_data.map((msg) => 
    
        <Message text={msg.text}
                 time={msg.time}
            direction={msg.direction} />
    );

    let newMsgItem = React.createRef();

    let sendMsg = () => {
        
        props.sendMsg();
    }

    let updateMsgText = () => {

        let text = newMsgItem.current.value;
        
        props.updateMsgText(text);
    }
    
    return (
        <div className={style.wrapper}>
            <section className={style.companion}>
                <img src={props.companion_img} alt="companion" />
                <p>{props.companion_name}</p>
            </section>
            <section className={style.chat}>
                { messages }
            </section>
            <section className={style.send_msg}>
                <input value={props.default_msg_val} ref={ newMsgItem } onChange={ updateMsgText } type="text" className={style.msg_field} />
                <button className={style.send_btn} onClick={ sendMsg } >Отправить</button>
            </section>
        </div>
    );
}

export default CurrentChat;