import friend from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={friend.wrapper}>
            <section className={friend.avatar}><img src={props.avatar} alt="ava" /></section>
            <section className={friend.name}>{props.name}</section>
            <section className={friend.age}>{props.age} лет</section>
            <section className={friend.actions}>
                <ul className={friend.actions_list}>
                    <li><a href="#c">Зайти в чат</a></li>
                    <li><a href="#u">Раздружиться</a></li>
                </ul>
            </section>
        </div>
    );
}

export default FriendItem;