import React from 'react';
import { addPostCreateAction, updatePostTextCreateAction, doLikeCreateAction } from './../../../redux/profile-reducer';
import Wall from './Wall';

const WallContainer = (props) => {
    
    let profile = props.store.getState().profile;

    let addPost = () => {
        
        props.store.dispatch(addPostCreateAction());
    }

    let updatePostText = (text) => {

        props.store.dispatch(updatePostTextCreateAction(text));
    }

    let doLike = (id) => {

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