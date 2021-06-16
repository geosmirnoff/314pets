import ChatList from './ChatList';
import StoreContext from './../../StoreContext';

const ChatListContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => <ChatList chat_items_data={store.getState().chats.chat_items_data} /> }
        </StoreContext.Consumer>
    );
}

export default ChatListContainer;