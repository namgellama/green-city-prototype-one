import { Link } from 'react-router-dom';
import Card from './shared/Card';

interface Products {
	id: number;
	title: string;
	price: number;
	flavour: string;
	image: string;
}

interface Props {
	products: Products[];
}

const FeaturedProducts = ({ products }: Props) => {
	return (
		<section className=" w-full lg:w-[1200px] mx-auto text-center mt-[4rem] flex flex-col items-center">
			<header>
				<h1 className="text-2xl font-semibold">Featured Products</h1>
				<Link
					className="text-xl text-red-500 hover:text-red-300"
					to="/products"
				>
					Shop More <span>&rarr;</span>
				</Link>
			</header>
			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4">
				{products.map((product) => (
					<Link
						className="flex flex-col items-center mx-4"
						to={`/products/${product.id}`}
						key={product.id}
					>
						<Card>
							<img
								className="w-[300px] h-[300px] object-cover mb-3"
								src={product.image}
								alt={product.title}
								loading="lazy"
							/>
							<div className="flex flex-col items-center mt-5">
								<h1 className="text-xl font-semibold">
									{product.title} ({product.flavour})
								</h1>
								<p className="text-xl font-semibold">Rs. {product.price}</p>
							</div>
						</Card>
					</Link>
				))}
			</main>
		</section>
	);
};

export default FeaturedProducts;
