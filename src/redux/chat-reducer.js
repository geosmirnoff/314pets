import { format_date } from './state';

const SEND_MSG = "SEND-MSG";
const UPDATE_MSG_TEXT = "UPDATE-MSG-TEXT";

export const sendMsgCreateAction = () => {
    return {
        type: SEND_MSG
    }
}

export const updateMsgTextCreateAction = (text) => {
    return {
        type: UPDATE_MSG_TEXT,
        text: text
    }
}

export const chatReducer = (state, action) => {

    switch (action.type) {

        case UPDATE_MSG_TEXT:

            state.default_msg_val = action.text;
            //this._rerenderEntireTree();
            break;

        case SEND_MSG:

            let msg_time = new Date();

            let new_chat_item = {
                companion_id: "id5",
                message_id: "msg8",
                text: state.default_msg_val,
                date: format_date(new Date()),
                time: msg_time.toLocaleTimeString(),
                direction: "from_me",
            }
            state.current_chat_data.push(new_chat_item);
            //this._rerenderEntireTree();
            state.default_msg_val = "";
            break;
        default: 
            return state;
    }
    return state;
}