import CurrentChat from './CurrentChat';
//import React from 'react';
import { sendMsgCreateAction, updateMsgTextCreateAction } from './../../redux/chat-reducer';
import { connect } from 'react-redux';

/*const oldCurrentChatContainer = () => {

    return (
        <Consumer>
            {
                (store) => {

                    let chats = store.getState().chats;

                    let sendMsg = () => {

                        store.dispatch(sendMsgCreateAction())
                    }

                    let updateMsgText = (text) => {

                        store.dispatch(updateMsgTextCreateAction(text));
                    }

                    return (
                        <CurrentChat companion_name={chats.companion_name}
                            companion_img={chats.companion_img}
                            current_chat_data={chats.current_chat_data}
                            default_msg_val={chats.default_msg_val}
                            sendMsg={sendMsg}
                            updateMsgText={updateMsgText} />)
                }
            }
        </Consumer>
    );
}*/

let mapStateToProps = (state) => {

    let chats = state.chats;

    return {
        companion_name: chats.companion_name,
        companion_img: chats.companion_img,
        current_chat_data: chats.current_chat_data,
        default_msg_val: chats.default_msg_val
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => {
            dispatch(sendMsgCreateAction())
        },
        updateMsgText: (text) => {
            dispatch(updateMsgTextCreateAction(text))
        }
    }
}

const CurrentChatContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentChat)

export default CurrentChatContainer;