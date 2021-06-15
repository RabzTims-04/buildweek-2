import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Profile from "./components/Profile";
import Head from "./components/Navbar";
import SecondNav from "./components/SecondNav"
import Footer from "./components/Footer"





function App() {
  return (
 
      <Router>
       
        <Head/>
         <SecondNav/>
        <Route exact path="/" component={Profile}/>
        <Footer/>

 
      </Router>
 
  );
}

export default App;
