import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Router>

        <Route exact path="/" component={Profile}/>

      </Router>
      
    </div>
  );
}

export default App;
