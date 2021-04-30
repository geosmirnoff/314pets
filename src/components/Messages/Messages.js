import msg from './Messages.module.css';
import MessageList from './MessageList';
import CurrrentDialog from './CurrentDialog';

const Messages = (props) => {
    return (
        <div className={msg.wrapper}>
            <div className={msg.list}>
                {/* List of dialogs */}
                <MessageList />
            </div>
            <div className={msg.current}>
                <CurrrentDialog />
            </div>
        </div>
    );
}

export default Messages;