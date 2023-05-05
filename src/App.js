import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					{/* <PrivateRoute path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} /> */}
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<PrivateRoute Component={HomePage} />} />
				</Routes>
			</Router>
			<p>First react website, innit?</p>
		</div>
	);
}

export default App;