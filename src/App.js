import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom'
=======

import { BrowserRouter as Router,Route  } from 'react-router-dom'

>>>>>>> 55823561e9d2f91ccae53295f621fb1a8c4550af
import './App.css';
import Profile from "./components/Profile";
import Head from "./components/Navbar";
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
