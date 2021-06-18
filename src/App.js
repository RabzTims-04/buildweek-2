import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Profile from "./components/Profile";
import Head from "./components/Navbar";
import SecondNav from "./components/SecondNav"
import Footer from "./components/Footer"
import Home from './components/Home'
import PostProfilePic from './components/PostProfilePic'

function App() {

  const [img, setImg] = useState('')
  const profile =(pic)=>{
    setImg(pic)  
    console.log('pic',pic);
  }

  return (
 
      <Router> 
       
        <Head profilePic={img}/>
        <Route exact path ="/" component={SecondNav}/>
        {/* <Route exact path ="/feed" component ={PostProfilePic}/>   */}     
        <Route exact path="/" render={(routerProps)=><Profile {...routerProps} profilePic={profile}/>}/>
        <Route exact path ="/feed" render={(routerProps)=><Home {...routerProps} profilePic ={img} />}/>     
        <Route exact path ="/" component ={Footer}/>
       

 
      </Router>
 
  );
}

export default App;
