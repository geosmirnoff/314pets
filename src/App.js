//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Chats from './components/Chats/Chats';

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
                 render={() => <Profile posts_data={props.posts_data} />} />
          <Route path="/chats" 
                 render={() => <Chats chat_items_data={props.chat_items_data} current_chat_data={props.current_chat_data}
                                      companion_name={props.companion_name} companion_img={props.companion_img} />} />
          {/* <Route component={Profile} path="/profile" />
          <Route component={Chats} path="/chats" /> */}
          {/* <Profile /> */}
          {/* <Messages /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;