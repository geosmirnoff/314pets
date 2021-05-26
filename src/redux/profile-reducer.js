import { format_date } from './state';

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

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

export const profileReducer = (state, action) => {

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
                author: "Котокот",
                avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
                date: format_date(new Date()),
                body: state.new_post_text,
                likes_number: 0
            }

            state.posts_data.splice(0, 0, new_post);
            //this._rerenderEntireTree();
            state.new_post_text = "";
            state.post_symbol_limit = 150;
            break;
        default: 
            return state;
    }
    return state;
}