import { useState } from 'react';
import Showcase from '../components/Showcase';
import FeaturedProducts from '../components/FeaturedProducts';
import productsData from '../data/productsData';

const HomePage = () => {
	const [products, setProducts] = useState(productsData);

	return (
		<>
			<Showcase />
			<FeaturedProducts
				products={products.filter((product) => product.featured === true)}
			/>
		</>
	);
};

export default HomePage;
