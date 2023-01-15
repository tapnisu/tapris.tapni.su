import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import CommandCard from "../components/CommandCard.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import commands from "../json/commands.json" assert { type: "json" };

export default function Home() {
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
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col items-center p-2">
            <img
              src="/avatar.png"
              class="w-72 h-72 rounded-full"
              alt="Avatar"
            />
          </div>

          <h1 className="text-3xl m-2">Tapris</h1>
          <p className="m-2 text-center">Multipurpose discord bot</p>
          <a href="https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334">
            <Button>Invite</Button>
          </a>
        </div>

        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="pt-16 text-3xl text-center">Usefull commands</h1>

          <div className="grid p-4 grid-cols-1 md:grid-cols-2">
            {commands
              .filter((command) =>
                ["color", "clear", "avatar", "user"].includes(command.name)
              )
              .map((command) => (
                <CommandCard command={command} id={i} key={i++} />
              ))
              .reverse()}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
