import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import CommandCard from "../components/CommandCard.tsx";
import { Button } from "../components/FakeButton.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import { Command } from "../types/Command.ts";

export const handler: Handlers<Command[]> = {
  async GET(_, ctx) {
    const request = await fetch("https://tapris-bot.deno.dev/api/v1/commands");
    const command: Command[] = await request.json();

    return ctx.render(command);
  },
};

export default function Home(props: PageProps<Command[]>) {
  let i = 0;

  return (
    <>
      <Head>
        <title>Tapris</title>
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex flex-col items-center p-2">
            <img
              src="/avatar.webp"
              class="w-72 h-72 rounded-full"
              alt="Avatar"
            />
          </div>

          <h1 className="text-3xl m-2">Tapris</h1>
          <p className="m-2 text-center">Multipurpose discord bot</p>
          <a href="https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334">
            <Button>
              {" "}
              <p>Invite</p>
            </Button>
          </a>
        </div>

        <div className="flex flex-col justify-center my-4">
          <h1 className="pt-16 text-3xl text-center">Usefull commands</h1>

          <div className="grid p-4 grid-cols-1 md:grid-cols-2">
            {props.data
              .filter((command) =>
                ["color", "help", "avatar", "user"].includes(command.name)
              )
              .map((command) => (
                <CommandCard command={command} id={i} key={i++} />
              ))
              .reverse()}
          </div>
        </div>

        <div className="text-white text-center flex flex-col items-center p-4 py-16 my-4">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
            <h1 className="text-2xl font-bold m-4">
              Built without love using{" "}
              <a href="https://deno.land/" className="underline">
                Deno
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/harmonyland/harmony"
                className="underline"
              >
                @harmonyland/harmony
              </a>
            </h1>

            <img src="/deno.svg" alt="Deno logo" className="m-4 w-32" />
          </div>
          <a href="https://github.com/tapris-bot/tapris">
            <Button>View bot's sourse code</Button>
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}
