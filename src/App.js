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

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-main">
          <Route path="/profile" 
                 render={() => <Profile store={props.store} />} />
          
          <Route path="/chats" 
                 render={() => <Chats store={props.store} />} />
          
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