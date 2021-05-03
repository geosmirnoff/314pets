import chats from './Chats.module.css';
import ChatList from './ChatList';
import CurrentChat from './CurrentChat';

const Chats = (props) => {

    // let chat_items_data = props.chat_items_data;
    // let current_chat_data = props.current_chat_data;
    // let companion_name = props.companion_name;
    // let companion_img = props.companion_img;

    return (
        <div className={chats.wrapper}>
            <div className={chats.list}>
                {/* List of chats */}
                <ChatList chat_items_data={props.chat_items_data} />
            </div>
            <div className={chats.current}>
                <CurrentChat companion_name={props.companion_name} 
                             companion_img={props.companion_img}
                             current_chat_data={props.current_chat_data} />
            </div>
        </div>
    );
}

export default Chats;