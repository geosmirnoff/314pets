import { format_date } from './store';

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

let initialState = {
    default_msg_val: "Йоу собаки",
    chat_items_data: [
        {
            from_id: "id2",
            from_img: "https://pbs.twimg.com/profile_images/938269312166563840/tbT6X3eU.jpg",
            from_name: "Пёсопёс",
            text: "Йо, петух, стрела за гаражами",
            date: "30.04.21"
        },
        {
            from_id: "id3",
            from_img: "https://krasivosti.pro/uploads/posts/2021-04/1618486033_16-krasivosti_pro-p-riba-v-ochkakh-ribi-krasivo-foto-17.jpg",
            from_name: "Рыборыб",
            text: "Есть чо? А еси найду?",
            date: "29.04.21"
        },
        {
            from_id: "id4",
            from_img: "https://wallbox.ru/resize/640x960/wallpapers/main/201546/20309cc1d731ed6.jpg",
            from_name: "Крысокрыс",
            text: "Го пить, я создал",
            date: "28.04.21"
        },
    ],
    current_chat_data: [
        {
            companion_id: "id5",
            message_id: "msg1",
            text: "Дороу",
            date: "03.05.2021",
            time: "17:58",
            direction: "to_me"
        },
        {
            companion_id: "id5",
            message_id: "msg2",
            text: "Дратути",
            date: "03.05.2021",
            time: "17:59",
            direction: "from_me"
        },
        {
            companion_id: "id5",
            message_id: "msg3",
            text: "Как жись?",
            date: "03.05.2021",
            time: "18:05",
            direction: "to_me"
        },
        {
            companion_id: "id5",
            message_id: "msg4",
            text: "Намана",
            date: "03.05.2021",
            time: "18:06",
            direction: "from_me"
        },
        {
            companion_id: "id5",
            message_id: "msg5",
            text: "Што делоиш?",
            date: "03.05.2021",
            time: "18:06",
            direction: "to_me"
        },
        {
            companion_id: "id5",
            message_id: "msg6",
            text: "Кушою",
            date: "03.05.2021",
            time: "18:07",
            direction: "from_me"
        },
        {
            companion_id: "id5",
            message_id: "msg7",
            text: "Панятна",
            date: "03.05.2021",
            time: "18:14",
            direction: "to_me"
        },
    ],
    companion_name: "Птицептиц",
    companion_img: "https://www.meme-arsenal.com/memes/67e204168b032eea544ad1a45f880945.jpg",
};

export const chatReducer = (state = initialState, action) => {

    let stateChange = {...state};

    switch (action.type) {

        case UPDATE_MSG_TEXT:

            stateChange.default_msg_val = action.text;
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

            stateChange.current_chat_data = [...state.current_chat_data]

            stateChange.current_chat_data.push(new_chat_item);
            //this._rerenderEntireTree();
            stateChange.default_msg_val = "";
            break;
        default: 
            return stateChange;
    }
    return stateChange;
}