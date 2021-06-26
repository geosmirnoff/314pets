import { format_date } from './store';

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const DO_LIKE = "DO-LIKE";

export const addPostCreateAction = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostTextCreateAction = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        text: text
    }
}

export const doLikeCreateAction = (id) => {
    return {
        type: DO_LIKE,
        id: id
    }
}

let initialState = {
    post_symbol_limit: 150 - "Путин - вор".length,
    new_post_text: "Путин - вор",
    posts_data: [
        {
            id: 3,
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "20.04.2021",
            body: "Мой человек - долбоящер",
            likes_number: 300,
            liked_by_me: false
        },
        {
            id: 2,
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "19.04.2021",
            body: "Давненько меня не гладили",
            likes_number: 200,
            liked_by_me: false
        },
        {
            id: 1,
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "18.04.2021",
            body: "100 дней без валерьянки",
            likes_number: 100,
            liked_by_me: false
        },
    ],
};

export const profileReducer = (state = initialState, action) => {

    let stateChange = {...state};

    switch (action.type) {

        case UPDATE_POST_TEXT:

            stateChange.post_symbol_limit = 150 - action.text.length;
            
            if (stateChange.post_symbol_limit >= 0) {
                
                stateChange.new_post_text = action.text;

                //this._rerenderEntireTree();
            }
            break;
        case ADD_POST:
            
            let new_post = {
                id: +state.posts_data[0].id + 1,
                author: "Котокот",
                avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
                date: format_date(new Date()),
                body: state.new_post_text,
                likes_number: 0,
                liked_by_me: false
            }
            
            stateChange.posts_data = [...state.posts_data];

            stateChange.posts_data.splice(0, 0, new_post);
            //this._rerenderEntireTree();
            stateChange.new_post_text = "";
            stateChange.post_symbol_limit = 150;
            break;
        case DO_LIKE:

            stateChange.posts_data = [...state.posts_data];

            for (let i = 0; i < state.posts_data.length; i++) {

                stateChange.posts_data[i] = {...state.posts_data[i]};

                if (stateChange.posts_data[i].id === action.id) {

                    switch (stateChange.posts_data[i].liked_by_me) {
                        case false:
                            stateChange.posts_data[i].likes_number = +stateChange.posts_data[i].likes_number + 1;
                            stateChange.posts_data[i].liked_by_me = true;
                            break;
                        case true:
                            stateChange.posts_data[i].likes_number = +stateChange.posts_data[i].likes_number - 1;
                            stateChange.posts_data[i].liked_by_me = false;
                            break;
                        default:
                            break;
                    }
                }
            }
            break;
        default: 
            return stateChange;
    }
    return stateChange;
}