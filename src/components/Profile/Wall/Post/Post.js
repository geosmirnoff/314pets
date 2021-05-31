import post from './Post.module.css';
import { doLikeCreateAction } from './../../../../redux/profile-reducer';


const Post = (props) => {

    let doLike = () => {

        let id = props.id;
        props.dispatch(doLikeCreateAction(id));
    }
    return (
        <section className={post.item}>
            <img src={props.avatar} className="avatar" alt="avatar" />
            <p className={post.author}>{props.author}</p>
            <p className={post.date}>{props.date}</p>
            <article className={post.body}>
                {props.body} <a href='#s'>Далее...</a>
            </article>
            <div className={post.likes}>
                <img onClick={ doLike } src="https://toppng.com/uploads/preview/dog-paw-print-png-dog-paw-11563597387zsw1pcwdge.png" alt="paw" />
                <span className={post.likes_number}>{props.likes_number}</span>
            </div>
        </section>
    );
}

export default Post;