import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={HomePage} /> 
      <Router/>
    </div>
  );
}

export default App;
