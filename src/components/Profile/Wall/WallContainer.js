import React from 'react';
import { addPostCreateAction, updatePostTextCreateAction, doLikeCreateAction } from './../../../redux/profile-reducer';
import Wall from './Wall';
import StoreContext from './../../../StoreContext';

const WallContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    //let state = store.getState();

                    let profile = store.getState().profile;

                    let addPost = () => {

                        store.dispatch(addPostCreateAction());
                    }

                    let updatePostText = (text) => {

                        store.dispatch(updatePostTextCreateAction(text));
                    }

                    let doLike = (id) => {

                        store.dispatch(doLikeCreateAction(id));
                    }

                    return (
                        <Wall updatePostText={updatePostText}
                            addPost={addPost}
                            posts_data={profile.posts_data}
                            new_post_text={profile.new_post_text}
                            post_symbol_limit={profile.post_symbol_limit}
                            doLike={doLike} />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default WallContainer;