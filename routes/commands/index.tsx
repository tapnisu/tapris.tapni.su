import { Handlers, PageProps } from "$fresh/server.ts";
import BasePageLayout from "../../components/BasePageLayout.tsx";
import CommandCard from "../../components/CommandCard.tsx";
import { Command } from "../../typings/Command.ts";

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
    <BasePageLayout title="Tapris - Commands" description="Commands for tapris">
      <h1 className="pt-16 text-3xl text-center">Commands</h1>

      <div className="grid p-4 grid-cols-1 md:grid-cols-2 md:mx-16">
        {props.data
          .map((command) => <CommandCard command={command} id={i} key={i++} />)
          .reverse()}
      </div>
    </BasePageLayout>
  );
}
