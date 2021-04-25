import msg from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={msg.wrapper}>
            <div className={msg.list}>List of dialogs</div>
            <div className={msg.current}>Current dialog</div>
        </div>
    );
}

export default Messages;