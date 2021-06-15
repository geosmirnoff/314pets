import ChatItem from './ChatItem';
import style from './ChatList.module.css';

const ChatList = (props) => {

    let chat_items = props.chat_items_data.map((item) => 
        
        <ChatItem from_img={item.from_img}
                  from_name={item.from_name}
                  text={item.text}
                  date={item.date}
                  from_id={item.from_id} />
    );

    return (
        <div className={style.wrapper}>
            {chat_items}
        </div>
    );
}

export default ChatList;