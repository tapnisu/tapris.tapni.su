import { Head } from "$fresh/runtime.ts";
import CommandCard from "../../components/CommandCard.tsx";
import Footer from "../../components/Footer.tsx";
import Navbar from "../../components/Navbar.tsx";
import commands from "../../json/commands.json" assert { type: "json" };

export default function Commands() {
  let i = 0;

  return (
    <>
      <Head>
        <title>Tapris</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <Navbar />

      <div className="bg-black text-white">
        <h1 className="pt-16 text-3xl text-center">Commands</h1>

        <div className="grid p-4 grid-cols-1 md:grid-cols-2">
          {commands
            .map((command) => (
              <CommandCard
                command={command}
                id={i}
                key={i++}
              />
            ))
            .reverse()}
        </div>

        <Footer />
      </div>
    </>
  );
}
