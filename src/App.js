import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router,Route  } from 'react-router-dom'

import './App.css';
import Head from './components/Navbar';
import Profile from "./components/Profile";


function App() {
  return (
    <div>
       
      <Router>

         <Head/>


        <Route exact path="/" component={Profile}/>

      </Router>
      
    </div>
  );
}

export default App;
