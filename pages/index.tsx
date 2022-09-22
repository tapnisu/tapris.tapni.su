import CommandCard from "@components/CommandCard";
import Footer from "@components/Footer";
import Navbar from "@components/NavBar";
import NavBase from "@components/NavBase";
import commands from "@json/commands.json";
import AvatarPreview from "@public/avatar.png";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Index: NextPage = ({ data }: any) => {
	let i = 0;

	return (
		<div className="bg-black text-white">
			<Head>
				<title>Tapris</title>
				<meta name="description" content="Discord bot for multiple purposes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col content-around justify-between">
				<Navbar />

				<div className="min-h-screen w-full flex flex-col justify-center content-center items-center">
					<div className="w-72 m-4">
						<Image
							alt="Avatar"
							src={AvatarPreview}
							layout="responsive"
							className="rounded-full"
							priority={true}
							placeholder="blur"
						/>
					</div>
					<h1 className="text-3xl m-2">Tapris</h1>
					<p className="m-2 text-center">Multipurpose discord bot</p>
					<Link href="https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334">
						<button className="bg-indigo-400 rounded-3xl p-4 px-10 m-2">
							Invite
						</button>
					</Link>

					{/* How to center div */}
					<div className="opacity-0 w-full">
						<NavBase />
					</div>
				</div>

				<div className="min-h-screen flex flex-col justify-center">
					<h1 className="pt-16 text-3xl text-center">Usefull commands</h1>

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

	return {
		props: {
			data: {
				commands: commands.filter((command) =>
					["color", "clear", "avatar", "user"].includes(command.name)
				),
			},
		},
	};
}

export default Index;
