import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
               
                <Route path="/" component={Home}/>
                </Router>
      </div>
  );
}

export default App;
