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
                <Post author="Котокот" date="20.04.2021" body="Мой человек - долбоящер" likes_number="300" avatar="https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg" />
                <Post author="Котокот" date="19.04.2021" body="Давненько меня не гладили" likes_number="200" avatar="https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg" />
                <Post author="Котокот" date="18.04.2021" body="100 дней без валерьянки" likes_number="100" avatar="https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg" />
            </div>
      </div>
    );
}

export default Wall;