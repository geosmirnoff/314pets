import React from 'react';
import Post from './Post/Post';
import style from './Wall.module.css';

const Wall = (props) => {

    let posts = props.posts_data.map((post) =>
    
        <Post author={post.author}
              avatar={post.avatar}
              date={post.date}
              body={post.body}
              likes_number={post.likes_number}
              liked_by_me={post.liked_by_me}
              id={post.id}
              doLike={props.doLike} />
    );

    let newPostItem = React.createRef();

    let addPost = () => {
        
        props.addPost();
    }

    let updatePostText = () => {

        let text = newPostItem.current.value;
        
        props.updatePostText(text);
    }

    return (
        <div className={style.wall}>
            <p className={style.wall_paragraph}>Дуров верни стену</p>
            <section>
                <form name="new-post">
                    <textarea className={style.post_field} ref={ newPostItem } onChange={ updatePostText } wrap="hard" rows="4" cols="50" maxLength="200" value={props.new_post_text} /><br />
                    <p>Осталось символов: {props.post_symbol_limit}</p>
                    <button type="button" className={style.send_btn} onClick={ addPost }>Отправить</button>
                </form>
            </section>
            <section>
                { posts }
            </section>
      </div>
    );
}

export default Wall;