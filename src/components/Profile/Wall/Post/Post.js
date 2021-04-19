import post from './Post.module.css';

const Post = () => {
    return (
        <section className={post.item}>
            <img src="https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg" className="avatar" alt="avatar" />
            <p className={post.author}>Котокот</p>
            <p className={post.date}>20.04.2021</p>
            <article className={post.body}>
                Мой человек - долбоящер <a href='#s'>Далее...</a>
            </article>
            <div className={post.likes}>
                <img src="https://toppng.com/uploads/preview/dog-paw-print-png-dog-paw-11563597387zsw1pcwdge.png" alt="paw" />
                <span className={post.likes_number}>300</span>
            </div>
        </section>
    );
}

export default Post;