import CurrentChat from './CurrentChat';
import React from 'react';
import { sendMsgCreateAction, updateMsgTextCreateAction } from './../../redux/chat-reducer';

const CurrentChatContainer = (props) => {

    let chats = props.store.getState().chats;

    let sendMsg = () => {
        
        props.store.dispatch(sendMsgCreateAction())
    }

    let updateMsgText = (text) => {

        props.store.dispatch(updateMsgTextCreateAction(text));
    }
    
    return (
        <CurrentChat companion_name={chats.companion_name} 
                     companion_img={chats.companion_img}
                     current_chat_data={chats.current_chat_data}
                     default_msg_val={chats.default_msg_val}
                     sendMsg={sendMsg}
                     updateMsgText={updateMsgText} />
    );
}

export default CurrentChatContainer;