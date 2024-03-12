import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menus from './Pages/Menus';
import Footer from './Components/Footer';
import FAQ from './Pages/FAQ';

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
				<Route
					path={'/faq'}
					Component={FAQ}
				/>
			</Routes>
			<Footer />
		</>
	);
};

export default App;
