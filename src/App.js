import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Profile from "./components/Profile";
import Head from "./components/Navbar";
import SecondNav from "./components/SecondNav"
import Footer from "./components/Footer"
import Home from './components/Home'





function App() {
  return (
 
      <Router>
       
        <Head/>
        <Route exact path ="/" component={SecondNav}/>
        <Route exact path="/" component={Profile}/>
        <Route exact path ="/feed" component ={Home}/>
        <Route exact path ="/" component ={Footer}/>

 
      </Router>
 
  );
}

export default App;
