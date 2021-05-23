import store/*state, { subscribe }*/ from './redux/state';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { add_post, update_post_text, send_msg, update_msg_text } from './redux/state';

let renderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            {/* <App chat_items_data={state.chat_items_data} 
            current_chat_data={state.current_chat_data}
            companion_name={state.companion_name}
            companion_img={state.companion_img}
            posts_data={state.posts_data}
            friend_items_data={state.friend_items_data} /> */}
            <App store={store} /*state={state} 
                 add_post={add_post} 
                 update_post_text={update_post_text} 
                 send_msg={send_msg}
                 update_msg_text={update_msg_text}*/ />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// add_post('кококо');
renderEntireTree();

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
