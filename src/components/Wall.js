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
                <section className="post-content">Мой человек - долбоящер</section>
                <section className="post-content">Давно меня не гладили</section>
                <section className="post-content">100 дней без валерьянки...</section>
            </div>
      </div>
    );
}

export default Wall;