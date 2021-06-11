import post from './Post.module.css';
//import { doLikeCreateAction } from './../../../../redux/profile-reducer';

const Post = (props) => {

    let doLike = () => {

        let id = props.id;
        props.doLike(id);
    }

    // Если есть лайк от текущего пользователя, применяем доп. CSS-класс
    let liked_by_me = (props.liked_by_me === true) ? post.liked_by_me : '';

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
                <span className={ `${post.likes_number} ${liked_by_me}` }>
                    {/* Не отображаем кол-во лайков, если их нет */}
                    { (props.likes_number > 0) ? props.likes_number : '' }
                </span>
            </div>
        </section>
    );
}

export default Post;