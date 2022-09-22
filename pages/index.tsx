import Footer from "@components/Footer";
import Navbar from "@components/NavBar";
import AvatarPreview from "@public/avatar.png";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Index: NextPage = () => {
	return (
		<div className="bg-black text-white">
			<Head>
				<title>Tapris</title>
				<meta name="description" content="Discord bot for multiple purposes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-col content-around justify-between">
				<Navbar />

				<div className="w-full flex flex-col content-center items-center">
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
				</div>

				<Footer />
			</main>
		</div>
	);
};

export default Index;
