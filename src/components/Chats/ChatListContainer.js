import { connect } from 'react-redux';
import ChatList from './ChatList';

/*const ChatListContainer = () => {

    return (
        <Consumer>
            { (store) => <ChatList chat_items_data={store.getState().chats.chat_items_data} /> }
        </Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        chat_items_data: state.chats.chat_items_data
    }
}

const ChatListContainer = connect(mapStateToProps)(ChatList);

export default ChatListContainer;