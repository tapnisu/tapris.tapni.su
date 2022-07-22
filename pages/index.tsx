import Footer from "@components/Footer";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@components/NavBar";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Tapris</title>
        <meta name="description" content="Discord bot for multiple purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Navbar />

        <a id="home"></a>
        <div className="w-full h-screen flex flex-col flex-wrap justify-center items-center">
          <picture>
            <img src="/avatar.png" alt="Avatar" className="w-72 rounded-full" />
          </picture>

          <h1 className="text-3xl m-4">Tapris</h1>
          <Link href="https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334">
            <button className="bg-indigo-400 p-4 rounded-3xl">Invite</button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
