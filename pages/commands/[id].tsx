import Footer from "@components/Footer";
import Nav from "@components/NavBar";
import OptionCard from "@components/OptionCard";
import commands from "@json/commands.json";
import type { NextPage } from "next";
import Head from "next/head";

const Command: NextPage = ({ data }: any) => {
	let i = 0;

	return (
		<div className="bg-black text-white">
			<Head>
				<title>{`${data.command.name} - Commands - Tapris`}</title>
				<meta name="description" content={data.command.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col justify-between">
				<Nav />

				<div className="w-full flex flex-column flex-wrap content-center justify-center items-center">
					<div className="w-fit p-8">
						<span className="text-3xl">
							<span className="text-indigo-400">/{data.command.name}</span> -{" "}
							{data.command.description}
						</span>

						{data.command.options && data.command.options.length > 0
							? data.command.options
								? data.command.options.map((option: any) => (
										<OptionCard option={option} key={i++} />
								  ))
								: ""
							: ""}
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export async function getServerSideProps(context: any) {
	context.res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	const id = context.params.id;

	if (commands.filter((command) => command.name === id).length == 0)
		return {
			props: { data: { command: { name: "404", description: "Not found!" } } },
		};

	return {
		props: {
			data: { command: commands.find((command) => command.name == id) },
		},
	};
}

export default Command;
