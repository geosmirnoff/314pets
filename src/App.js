//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-main">
          <Route component={Profile} path="/profile" />
          <Route component={Messages} path="/messages" />
          {/* <Profile /> */}
          {/* <Messages /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;