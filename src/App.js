//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
// import Messages from './components/Messages/Messages';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />      
      {/* <Messages /> */}
      <Footer />
    </div>
  );
}

export default App;