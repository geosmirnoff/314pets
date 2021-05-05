import React from 'react';
import Post from './Post/Post';
import style from './Wall.module.css';

const Wall = (props) => {
    
    // let posts_data = props.posts_data;

    let posts = props.posts_data.map((post) =>
    
        <Post author={post.author}
              avatar={post.avatar}
              date={post.date}
              body={post.body}
              likes_number={post.likes_number} />
    );

    let newPostItem = React.createRef();

    let addPost = () => {
        
        let text = newPostItem.current.value;
        
        alert(text);
    }

    return (
        <div className={style.wall}>
            <p className={style.wall_paragraph}>Дуров верни стену</p>
            <section>
                <form name="new-post">
                    <textarea className={style.post_field} ref={ newPostItem } wrap="hard" rows="4" cols="50" maxLength="200" placeholder="Введите текст..."></textarea><br />
                    <button className={style.send_btn} onClick={ addPost }>Отправить</button>
                </form>
            </section>
            <section>
                { posts }
                {/* <Post author={post_data[0].author}
                        avatar={post_data[0].avatar}
                        date={post_data[0].date}
                        body={post_data[0].body}
                        likes_number={post_data[0].likes_number} /> */}
            </section>
      </div>
    );
}

export default Wall;