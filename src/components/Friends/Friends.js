import FriendItem from './FriendItem';
import style from './Friends.module.css';

const Friends = (props) => {
    
    let friend_items = props.data.friend_items_data.map((item) => 

        <FriendItem avatar={item.avatar} name={item.name} age={item.age} />
    );
    return (
        <div className={style.wrapper}>
             {friend_items}           
        </div>
    );
}

export default Friends;