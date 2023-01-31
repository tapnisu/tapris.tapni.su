import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import CommandCard from "../../components/CommandCard.tsx";
import Footer from "../../components/Footer.tsx";
import Navbar from "../../components/Navbar.tsx";
import { Command } from "../../types/Command.ts";

export const handler: Handlers<Command[]> = {
  async GET(_, ctx) {
    const request = await fetch("https://tapris-bot.deno.dev/api/v1/commands");
    const command: Command[] = await request.json();

    return ctx.render(command);
  },
};

export default function Commands(props: PageProps<Command[]>) {
  let i = 0;

  return (
    <>
      <Head>
        <title>Tapris - Commands</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/globals.css" type="text/css" />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <h1 className="pt-16 text-3xl text-center">Commands</h1>

        <div className="grid p-4 grid-cols-1 md:grid-cols-2">
          {props.data
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
