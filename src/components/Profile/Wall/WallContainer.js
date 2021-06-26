//import React from 'react';
import { addPostCreateAction, updatePostTextCreateAction, doLikeCreateAction } from './../../../redux/profile-reducer';
import Wall from './Wall';
import { connect } from 'react-redux';

/*const oldWallContainer = (props) => {

    return (
        <Consumer>
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
        </Consumer>
    );
}*/

let mapStateToProps = (state) => {

    let profile = state.profile;

    return {
        posts_data: profile.posts_data,
        new_post_text: profile.new_post_text,
        post_symbol_limit: profile.post_symbol_limit
    }
}

let mapDispatchToProps = (dispatch) => {
    //debugger;
    return {
        updatePostText: (text) => {
            dispatch(updatePostTextCreateAction(text))
        },
        addPost: () => {
            dispatch(addPostCreateAction());
        },
        doLike: (id) => {
            dispatch(doLikeCreateAction(id));
        }
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);

export default WallContainer;