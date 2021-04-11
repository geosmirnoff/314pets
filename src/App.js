//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />      
      <Footer />
    </div>
  );
}

export default App;