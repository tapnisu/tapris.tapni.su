import { Command } from "@typings/Command.ts";

interface CommandCardProps {
  command: Command;
  id: number;
}

const CommandCard = ({ command, id }: CommandCardProps) => {
  return (
    <div className="bg-neutral-900 m-2 p-8 rounded-3xl" key={id}>
      <a href={`/commands/${command.name}`}>
        <h2 className="text-xl cursor-pointer text-indigo-400">
          /{command.name}
        </h2>
      </a>

      {command.description}
    </div>
  );
};

export default CommandCard;
