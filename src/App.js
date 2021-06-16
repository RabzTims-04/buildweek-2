import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Profile from "./components/Profile";
import Head from "./components/Navbar";
import SecondNav from "./components/SecondNav"
import Footer from "./components/Footer"
import Home from './components/Home'

function App() {

  const [img, setImg] = useState('')
  const profile =(pic)=>{
    setImg(pic)  
    console.log('pic',pic);
  }

  return (
 
      <Router>
       
        <Head/>
        <Route exact path ="/" component={SecondNav}/>
        <Route exact path="/" render={(routerProps)=><Profile {...routerProps} profilePic={profile}/>}/>
        <Route exact path ="/feed" render={(routerProps)=><Home {...routerProps} profilePic ={img} />}/>
        <Route exact path ="/" component ={Footer}/>

 
      </Router>
 
  );
}

export default App;
