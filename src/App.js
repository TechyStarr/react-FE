import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Router> 
				<AuthProvider>
				<Header /> 
				<Routes> //use Routes component to define routes for app
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<PrivateRoute Component={HomePage} />} />
				</Routes>
				</AuthProvider>
			</Router>
			<p>First react website, innit?</p>
		</div>
	);
}

export default App;