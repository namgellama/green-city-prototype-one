interface Props {
	children?: React.ReactNode;
}

function Card({ children }: Props) {
	return (
		<div className="p-5 my-4 bg-white border border-gray-300 rounded-md">
			{children}
		</div>
	);
}

export default Card;
