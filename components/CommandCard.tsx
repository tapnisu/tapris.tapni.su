import Link from "next/link";

const CommandCard = ({ command, id }: any) => {
	return (
		<>
			<div className="bg-neutral-900 m-2 p-8 rounded-3xl">
				<Link href={`/commands/${id}`}>
					<h2 className="text-xl cursor-pointer text-indigo-400">
						/{command.name}
					</h2>
				</Link>

				{command.description}
			</div>
		</>
	);
};

export default CommandCard;
