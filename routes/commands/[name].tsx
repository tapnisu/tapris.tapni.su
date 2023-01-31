import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Command } from "@types/Command.ts";
import Footer from "../../components/Footer.tsx";
import Navbar from "../../components/Navbar.tsx";
import OptionCard from "../../components/OptionCard.tsx";
import commands from "../../json/commands.json" assert { type: "json" };

export const handler: Handlers<Command> = {
  async GET(_, ctx) {
    const request = await fetch(
      `https://tapris-bot.deno.dev/api/v1/commands/${ctx.params.name}`
    );
    const command: Command = await request.json();

    return ctx.render(command);
  },
};

export default function GetCommand(props: PageProps<Command>) {
  let i = 0;

  const commandFind = commands.find(
    (command) => command.name == props.params.name
  );

  const command = commandFind
    ? commandFind
    : { name: "404", description: "Not Found!" };

  return (
    <>
      <Head>
        <title>Tapris - Commands - {props.params.name}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
        <meta name="description" />
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <Navbar />

      <div className="bg-black text-white">
        <div className="flex min-h-screen flex-wrap content-center justify-center items-center">
          <div className="p-8">
            <span className="text-3xl">
              <span className="text-indigo-400">/{command.name}</span> -{" "}
              {command.description}
            </span>

            {command.options && command.options.length > 0
              ? command.options
                ? command.options.map((option) => (
                    <OptionCard option={option} id={i} key={i++} />
                  ))
                : ""
              : ""}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
