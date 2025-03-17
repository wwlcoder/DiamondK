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
			<Content />
			<Footer />
			<Routes>
				<Route path="/rules" element={<Rules />} />
			</Routes>
		</>
	)
}

export default App
