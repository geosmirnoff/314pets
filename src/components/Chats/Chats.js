import style from './Chats.module.css';
import ChatListContainer from './ChatListContainer';
import CurrentChatContainer from './CurrentChatContainer';

const Chats = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.list}>
                {/* List of chats */}
                <ChatListContainer store={props.store} />
            </div>
            <div className={style.current}>
                <CurrentChatContainer store={props.store} />
            </div>
        </div>
    );
}

export default Chats;