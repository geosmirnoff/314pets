import ChatList from './ChatList';

const ChatListContainer = (props) => {

    return (
        <ChatList chat_items_data={props.store.getState().chats.chat_items_data} />
    );
}

export default ChatListContainer;