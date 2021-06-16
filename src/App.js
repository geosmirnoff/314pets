//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import Chats from './components/Chats/Chats';
import FriendsContainer from './components/Friends/FriendsContainer';

const App = (props) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-main">
          <Route path="/profile" 
                 render={() => <Profile /*store={props.store}*/ />} />
          
          <Route path="/chats" 
                 render={() => <Chats /*store={props.store}*/ />} />
          
          <Route path="/friends"
                 render={() => <FriendsContainer /*store={props.store}*/ />} />
          
          {/* <Route component={Profile} path="/profile" />
          <Route component={Chats} path="/chats" /> */}
        </div>
        <Footer />
      </div>
  );
}

export default App;