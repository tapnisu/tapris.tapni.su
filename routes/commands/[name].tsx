import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../../components/Footer.tsx";
import Navbar from "../../components/Navbar.tsx";
import OptionCard from "../../components/OptionCard.tsx";
import { Command } from "../../types/Command.ts";

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

      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex flex-wrap content-center justify-center items-center">
          <div className="p-8">
            <span className="text-3xl">
              <span className="text-indigo-400">/{props.data.name}</span> -{" "}
              {props.data.description}
            </span>

            {props.data.options && props.data.options.length > 0
              ? props.data.options
                ? props.data.options.map((option) => (
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
