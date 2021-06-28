import style from './FriendItem.module.css';

const FriendItem = (props) => {

    const deleteFriend = () => {

        props.deleteFriend(props.id)
    }

    return (
        <div className={style.wrapper}>
            <section className={style.avatar}><img src={props.avatar} alt="ava" /></section>
            <section className={style.name}>{props.name}</section>
            <section className={style.age}>{props.age} лет</section>
            <section className={style.actions}>
                <ul className={style.actions_list}>
                    <li><a href="#c">Зайти в чат</a></li>
                    <li><a href="#u" onClick={deleteFriend}>Раздружиться</a></li>
                </ul>
            </section>
        </div>
    );
}

export default FriendItem;