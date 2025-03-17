import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Rules from './pages/Rules';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/rules" element={<Rules />} />
				<Route path="/" element={<Content />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
