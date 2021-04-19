import Post from './Post/Post';
import wall from './Wall.module.css';

const Wall = () => {
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
                <Post />
                <Post />
                <Post />
            </div>
      </div>
    );
}

export default Wall;