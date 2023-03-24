import ShowcaseImg from '../assets/showcase.jpg';

const Showcase = () => {
	return (
		<section>
			<img
				src={ShowcaseImg}
				alt="Showcase Img"
				className="w-full h-[650px] object-cover"
				loading="lazy"
			/>
		</section>
	);
};

export default Showcase;
