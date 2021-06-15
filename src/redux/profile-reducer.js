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

    switch (action.type) {

        case UPDATE_POST_TEXT:

            state.post_symbol_limit = 150 - action.text.length;
            
            if (state.post_symbol_limit >= 0) {
                
                state.new_post_text = action.text;

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

            state.posts_data.splice(0, 0, new_post);
            //this._rerenderEntireTree();
            state.new_post_text = "";
            state.post_symbol_limit = 150;
            break;
        case DO_LIKE:

            for (let i = 0; i < state.posts_data.length; i++) {

                if (state.posts_data[i].id === action.id) {

                    switch (state.posts_data[i].liked_by_me) {
                        case false:
                            state.posts_data[i].likes_number = +state.posts_data[i].likes_number + 1;
                            state.posts_data[i].liked_by_me = true;
                            break;
                        case true:
                            state.posts_data[i].likes_number = +state.posts_data[i].likes_number - 1;
                            state.posts_data[i].liked_by_me = false;
                            break;
                        default:
                            break;
                    }
                }
            }
            break;
        default: 
            return state;
    }
    return state;
}