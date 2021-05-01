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
                <CurrentChat companion_name="Птицептиц" companion_img="https://www.meme-arsenal.com/memes/67e204168b032eea544ad1a45f880945.jpg" />
            </div>
        </div>
    );
}

export default Chats;