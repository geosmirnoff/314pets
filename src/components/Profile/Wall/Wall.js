import Post from './Post/Post';
import wall from './Wall.module.css';

const Wall = () => {
    
    let posts_data = [
        {
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "20.04.2021",
            body: "Мой человек - долбоящер",
            likes_number: "300"
        },
        {
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "19.04.2021",
            body: "Давненько меня не гладили",
            likes_number: "200",
        },
        {
            author: "Котокот",
            avatar: "https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg",
            date: "18.04.2021",
            body: "100 дней без валерьянки",
            likes_number: "100",
        }
    ];

    let posts = posts_data.map((post) =>
    
        <Post author={post.author}
              avatar={post.avatar}
              date={post.date}
              body={post.body}
              likes_number={post.likes_number} />
    );

    return (
        <div className={wall.wall}>
            <p className="wall-p"><strong>Микроблог-стена</strong></p>
            <div className="post-form">
                <form name="new-post">
                    <textarea wrap="hard" rows="4" cols="50" maxLength="300" placeholder="Введите текст..."></textarea><br />
                    <button>Отправить</button>
                </form>
            </div>
            <div className="post-wall">
                { posts }
                {/* <Post author={post_data[0].author}
                        avatar={post_data[0].avatar}
                        date={post_data[0].date}
                        body={post_data[0].body}
                        likes_number={post_data[0].likes_number} /> */}
            </div>
      </div>
    );
}

export default Wall;