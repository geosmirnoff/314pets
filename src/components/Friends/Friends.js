import FriendItem from './FriendItem';
import friends from './Friends.module.css';

const Friends = (props) => {
    
    let friend_items = props.data.friend_items_data.map((item) => 

        <FriendItem avatar={item.avatar} name={item.name} age={item.age} />
    );
    return (
        <div className={friends.wrapper}>
             {friend_items}           
        </div>
    );
}

export default Friends;