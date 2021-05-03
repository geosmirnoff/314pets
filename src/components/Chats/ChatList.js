import ChatItem from './ChatItem';
import list from './ChatList.module.css';

const ChatList = (props) => {

    let item_data = [
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
    // let items = [];
    // for (let i = 0; i < data.length; i++) {
    //     items.push(<MessageItem from_img={`${data[i].from_img}`} 
    //                             from_name={`${data[i].from_name}`} 
    //                             text={`${data[i].text}`} 
    //                             date={`${data[i].date}`} />);
    // }
    return (
        <div className={list.wrapper}>
            {/* {items} */}
            <ChatItem from_img={item_data[0].from_img}
                        from_name={item_data[0].from_name}
                        text={item_data[0].text}
                        date={item_data[0].date}
                        from_id={item_data[0].from_id} />
            
            <ChatItem from_img={item_data[1].from_img}
                        from_name={item_data[1].from_name}
                        text={item_data[1].text}
                        date={item_data[1].date}
                        from_id={item_data[1].from_id} />
            
            <ChatItem from_img={item_data[2].from_img}
                        from_name={item_data[2].from_name}
                        text={item_data[2].text}
                        date={item_data[2].date}
                        from_id={item_data[2].from_id} />
            {/* <ChatItem from_img="https://pbs.twimg.com/profile_images/938269312166563840/tbT6X3eU.jpg" 
                         from_name="Пёсопёс" 
                         text="Йо, петух, стрела за гаражами"
                         date="30.04.21" 
                         id="id1" />   
            <ChatItem from_img="https://krasivosti.pro/uploads/posts/2021-04/1618486033_16-krasivosti_pro-p-riba-v-ochkakh-ribi-krasivo-foto-17.jpg" 
                         from_name="Рыборыб" 
                         text="Есть чо? А еси найду?"
                         date="29.04.21" 
                         id="id2" /> 
            <ChatItem from_img="https://wallbox.ru/resize/640x960/wallpapers/main/201546/20309cc1d731ed6.jpg" 
                         from_name="Крысокрыс" 
                         text="Го пить, я создал"
                         date="28.04.21" 
                         id="id3" /> */}
        </div>
    );
}

export default ChatList;