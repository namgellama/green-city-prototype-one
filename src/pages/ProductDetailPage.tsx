import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';
import productsData from '../data/productsData';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ProductDetailPage = () => {
	const { id } = useParams();
	const [products, setProducts] = useState(productsData);

	const product = products.find((product) => product.id === Number(id));

	return (
		<section className="w-full lg:w-[1200px] mx-auto my-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 py-4 px-4 lg:px-2 cursor-pointer justify-center">
			<div className="mb-8 md:flex">
				<img
					className="lg:w-[600px] lg:h-[540px] h-[450px] md:w-[600px] md:h-[600px] w-screen object-cover rounded-md"
					src={product?.image}
					alt={product?.title}
					loading="lazy"
				/>
			</div>
			<main className="md:px-6 lg:ml-2">
				<h1 className="text-3xl font-bold uppercase">
					{product?.title}
					<span className="text-2xl font-medium"> ({product?.flavour})</span>
				</h1>
				<h2 className="text-2xl font-semibold mt-2">Rs. {product?.price}</h2>
				<div className="flex items-center my-7">
					<a
						className="bg-red-500 text-white py-2 lg:py-3 px-3 lg:px-5 text-xl font-medium hover:bg-red-400 flex items-center mr-8"
						href="tel:+9779826747001"
						target="_blank"
					>
						Order <FaPhoneAlt size={18} className="ml-3" color="white" />
					</a>
					<a
						className="bg-[#333] text-white py-2 lg:py-3 px-3 lg:px-5 text-xl font-medium hover:bg-[#444] flex items-center"
						href="mailto: greencitynp@gmail.com"
						target="_blank"
					>
						Order <HiOutlineMail size={22} className="ml-3" color="white" />
					</a>
				</div>
				<div className="w-full my-5 text-lg text-justify">
					<div className="flex items-center mb-2">
						<GrCircleInformation size={25} />
						<span className="text-xl font-semibold ml-2">Description</span>
					</div>
					{product?.description}
				</div>
			</main>
		</section>
	);
};

export default ProductDetailPage;
