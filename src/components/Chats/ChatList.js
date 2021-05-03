import ChatItem from './ChatItem';
import list from './ChatList.module.css';

const ChatList = (props) => {

    let chat_items = props.chat_items_data.map((item) => 
        
        <ChatItem from_img={item.from_img}
                  from_name={item.from_name}
                  text={item.text}
                  date={item.date}
                  from_id={item.from_id} />
    );

    return (
        <div className={list.wrapper}>
            {chat_items}
            {/* <ChatItem from_img={item_data[0].from_img}
                        from_name={item_data[0].from_name}
                        text={item_data[0].text}
                        date={item_data[0].date}
                        from_id={item_data[0].from_id} /> */}
            {/* <ChatItem from_img="https://pbs.twimg.com/profile_images/938269312166563840/tbT6X3eU.jpg" 
                         from_name="Пёсопёс" 
                         text="Йо, петух, стрела за гаражами"
                         date="30.04.21" 
                         id="id1" /> */}
        </div>
    );
}

export default ChatList;