import wall from './Wall.module.css';

const Wall = () => {
    return (
        <div className="wall">
            <p className="wall-p"><strong>Микроблог-стена</strong></p>
            <div className="post-form">
                <form name="new-post">
                    <textarea wrap="hard" rows="4" cols="50" maxLength="300" placeholder="Введите текст..."></textarea><br />
                    <button>Отправить</button>
                </form>
            </div>
            <div className="post-wall">
                <section className={wall.item}>Мой человек - долбоящер <a href='#s'>Далее...</a></section>
                <section className={wall.item}>Давно меня не гладили <a href='#s'>Далее...</a></section>
                <section className={wall.item}>100 дней без валерьянки... <a href='#s'>Далее...</a></section>
            </div>
      </div>
    );
}

export default Wall;