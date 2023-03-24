import OfficeImg from '../assets/office.jpg';

const AboutPage = () => {
	return (
		<section className="my-8 lg:w-[1200px] mx-auto px-4">
			<img src={OfficeImg} alt="Office Image" className="object-cover" />
			<div className="text-xl font-medium mt-6  mb-5 text-justify">
				<p>
					GreenCity, established in 2022 in Lalitpur, Nepal, is a socially
					responsible company that specializes in delivering environmentally
					friendly products. Our mission is to provide high-quality, sustainable
					products that have a minimal environmental impact while promoting
					green living and environmental awareness in our community. With a
					focus on the local market and a commitment to our global
					responsibility, GreenCity is dedicated to making a positive impact
					both at home and abroad.
					{/* <span className="inline lg:hidden">
						&nbsp; Join us in our mission to create a greener future and contact
						us today to learn more about how we can help you!
					</span> */}
				</p>
				<p className="mt-10 lg:mt-2">
					GreenCity is a provider of quality products and services to businesses
					and individuals. Our commitment to excellence and customer
					satisfaction has made us a trusted partner for all our clients. Join
					us in our mission to create a greener future and contact us today to
					learn more about how we can help you!
				</p>
			</div>
		</section>
	);
};

export default AboutPage;
