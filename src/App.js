import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,  } from 'react-router-dom'
import './App.css';
import Head from './components/Navbar';
function App() {
  return (
    <div>
       
      <Router>
         <Head/>
      </Router>
      
    </div>
  );
}

export default App;
