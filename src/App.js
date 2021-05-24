//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Chats from './components/Chats/Chats';
import Friends from './components/Friends/Friends';

const App = (props) => {

  // let chat_items_data = props.chat_items_data;
  // let current_chat_data = props.current_chat_data;
  // let companion_name = props.companion_name;
  // let companion_img = props.companion_img;
  // let posts_data = props.posts_data;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-main">
          <Route path="/profile" 
                 render={() => <Profile data={props.store.getState().profile} 
                                        /*add_post={props.store.add_post.bind(props.store)}
                                        update_post_text={props.store.update_post_text.bind(props.store)}*/
                                        dispatch={props.store.dispatch.bind(props.store)}
                                        /*post_symbol_limit={props.store.getState().post_symbol_limit}*/ />} />
          
          <Route path="/chats" 
                 render={() => <Chats data={props.store.getState().chats} 
                                      /*send_msg={props.store.send_msg.bind(props.store)}
                                      update_msg_text={props.store.update_msg_text.bind(props.store)}*/
                                      dispatch={props.store.dispatch.bind(props.store)} />} />
          
          <Route path="/friends"
                 render={() => <Friends data={props.store.getState().friends} />} />
          
          {/* <Route component={Profile} path="/profile" />
          <Route component={Chats} path="/chats" /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;