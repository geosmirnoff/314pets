import chats from './Chats.module.css';
import ChatList from './ChatList';
import CurrentChat from './CurrentChat';

const Chats = (props) => {
    return (
        <div className={chats.wrapper}>
            <div className={chats.list}>
                {/* List of chats */}
                <ChatList />
            </div>
            <div className={chats.current}>
                <CurrentChat />
            </div>
        </div>
    );
}

export default Chats;