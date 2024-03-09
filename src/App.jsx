import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menus from './Pages/Menus';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path={'/'}
					Component={Home}
				/>
				<Route
					path={'/about'}
					Component={About}
				/>
				<Route
					path={'/menu'}
					Component={Menus}
				/>
			</Routes>
		</>
	);
};

export default App;
