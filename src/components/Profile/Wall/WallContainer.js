import React from 'react';
import { addPostCreateAction, updatePostTextCreateAction, doLikeCreateAction } from './../../../redux/profile-reducer';
import Wall from './Wall';

const WallContainer = (props) => {
    
    let profile = props.store.getState().profile;

    let addPost = () => {
        
        //let text = newPostItem.current.value;
        
        //props.add_post();
        //props.dispatch({type: "ADD-POST"});
        props.store.dispatch(addPostCreateAction());
    }

    let updatePostText = (text) => {

        //let text = newPostItem.current.value;
        //props.update_post_text(text);
        //props.dispatch({type: "UPDATE-POST-TEXT", text: text});
        props.store.dispatch(updatePostTextCreateAction(text));
    }

    let doLike = (id) => {

        //let id = props.id;
        props.store.dispatch(doLikeCreateAction(id));
    }
    
    return (
        <Wall updatePostText={updatePostText} 
                addPost={addPost} 
                posts_data={profile.posts_data}
                new_post_text={profile.new_post_text}
                post_symbol_limit={profile.post_symbol_limit}
                doLike={doLike} />
    );
}

export default WallContainer;