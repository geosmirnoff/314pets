import style from './Chats.module.css';
import ChatList from './ChatList';
import CurrentChat from './CurrentChat';

const Chats = (props) => {

    let data = props.data;

    return (
        <div className={style.wrapper}>
            <div className={style.list}>
                {/* List of chats */}
                <ChatList chat_items_data={data.chat_items_data} />
            </div>
            <div className={style.current}>
                <CurrentChat companion_name={data.companion_name} 
                             companion_img={data.companion_img}
                             current_chat_data={data.current_chat_data}
                             default_msg_val={data.default_msg_val}
                             /*send_msg={props.send_msg}
                             update_msg_text={props.update_msg_text}*/
                             dispatch={props.dispatch} />
            </div>
        </div>
    );
}

export default Chats;