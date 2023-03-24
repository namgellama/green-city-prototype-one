import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';

function App() {
	return (
		<>
			<NavBar />
			<main className="min-h-[85vh] md:min-h-[80vh] lg:min-h-[82vh]">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/products/:id" element={<ProductDetailPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
