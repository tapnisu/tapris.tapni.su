const CommandCard = ({ command, id }: any) => {
	return (
		<>
			<div className="bg-neutral-900 m-2 p-8 rounded-3xl">
				<h2 className="text-xl text-indigo-400">/{command.name}</h2>

				{command.description}
			</div>
		</>
	);
};

export default CommandCard;
