import { Handlers, PageProps } from "$fresh/server.ts";
import BasePageLayout from "../../components/BasePageLayout.tsx";
import OptionCard from "../../components/OptionCard.tsx";
import { Command } from "../../typings/Command.ts";

export const handler: Handlers<Command> = {
  async GET(_, ctx) {
    const request = await fetch(
      `https://tapris-bot.deno.dev/api/v1/commands/${ctx.params.name}`,
    );
    const command: Command = await request.json();

    return ctx.render(command);
  },
};

export default function GetCommand(props: PageProps<Command>) {
  let i = 0;

  return (
    <BasePageLayout
      title={`Tapris - Commands - ${props.params.name}`}
      description={props.data.description
        ? props.data.description
        : "Commands for Tapris"}
    >
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
    </BasePageLayout>
  );
}
