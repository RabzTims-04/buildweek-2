import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from 'react-router-dom'

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
