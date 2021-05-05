import chats from './Chats.module.css';
import ChatList from './ChatList';
import CurrentChat from './CurrentChat';

const Chats = (props) => {

    let data = props.data;

    return (
        <div className={chats.wrapper}>
            <div className={chats.list}>
                {/* List of chats */}
                <ChatList chat_items_data={data.chat_items_data} />
            </div>
            <div className={chats.current}>
                <CurrentChat companion_name={data.companion_name} 
                             companion_img={data.companion_img}
                             current_chat_data={data.current_chat_data} />
            </div>
        </div>
    );
}

export default Chats;