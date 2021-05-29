/*const SEND_MSG = "SEND-MSG";
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
}*/
let initialState = {
    friend_items_data: [
        {
            id: "id2",
            avatar: "https://pbs.twimg.com/profile_images/938269312166563840/tbT6X3eU.jpg",
            name: "Пёсопёс",
            age: "5"
        },
        {
            id: "id3",
            avatar: "https://krasivosti.pro/uploads/posts/2021-04/1618486033_16-krasivosti_pro-p-riba-v-ochkakh-ribi-krasivo-foto-17.jpg",
            name: "Рыборыб",
            age: "10"
        },
        {
            id: "id4",
            avatar: "https://wallbox.ru/resize/640x960/wallpapers/main/201546/20309cc1d731ed6.jpg",
            name: "Крысокрыс",
            age: "15"
        },
        {
            id: "id5",
            avatar: "https://www.meme-arsenal.com/memes/67e204168b032eea544ad1a45f880945.jpg",
            name: "Птицептиц",
            age: "20"
        },
    ],

};

export const friendsReducer = (state = initialState, action) => {

    /*switch (action.type) {

        /*case UPDATE_MSG_TEXT:

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
    }*/
    return state;
}