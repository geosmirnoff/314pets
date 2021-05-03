import ChatItem from './ChatItem';
import list from './ChatList.module.css';

const ChatList = (props) => {

    let items_data = [
        {
            from_id: "id1",
            from_img: "https://pbs.twimg.com/profile_images/938269312166563840/tbT6X3eU.jpg",
            from_name: "Пёсопёс",
            text: "Йо, петух, стрела за гаражами",
            date: "30.04.21"
        },
        {
            from_id: "id2",
            from_img: "https://krasivosti.pro/uploads/posts/2021-04/1618486033_16-krasivosti_pro-p-riba-v-ochkakh-ribi-krasivo-foto-17.jpg",
            from_name: "Рыборыб",
            text: "Есть чо? А еси найду?",
            date: "29.04.21"
        },
        {
            from_id: "id3",
            from_img: "https://wallbox.ru/resize/640x960/wallpapers/main/201546/20309cc1d731ed6.jpg",
            from_name: "Крысокрыс",
            text: "Го пить, я создал",
            date: "28.04.21"
        },
    ]
    
    let chat_items = items_data.map((items) => 
        
        <ChatItem from_img={items.from_img}
                  from_name={items.from_name}
                  text={items.text}
                  date={items.date}
                  from_id={items.from_id} />
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