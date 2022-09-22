import CommandCard from "@components/CommandCard";
import Footer from "@components/Footer";
import Nav from "@components/NavBar";
import commands from "@json/commands.json";
import type { NextPage } from "next";
import Head from "next/head";

const Commands: NextPage = ({ data }: any) => {
	let i = 0;

	return (
		<div className="bg-black text-white">
			<Head>
				<title>Commands - Tapris</title>
				<meta name="description" content="Discord bot for multiple purposes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col justify-between">
				<Nav />

				<div>
					<h1 className="pt-16 text-3xl text-center">My blog</h1>

					<div className="grid p-4 grid-cols-1 md:grid-cols-2">
						{data.commands
							.map((command: any) => (
								<CommandCard command={command} id={i} key={i++} />
							))
							.reverse()}
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export async function getServerSideProps({ req, res }: any) {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	return { props: { data: { commands: commands } } };
}

export default Commands;
