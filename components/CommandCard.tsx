import { Command } from "../types/Command.ts";

interface CommandCardProps {
  command: Command;
  id: number;
}

const CommandCard = ({ command, id }: CommandCardProps) => {
  return (
    <>
      <div className="bg-gray-900 m-2 p-8 rounded-3xl">
        <a href={`/commands/${command.name}`}>
          <h2 className="text-xl cursor-pointer text-indigo-400">
            /{command.name}
          </h2>
        </a>

        {command.description}
      </div>
    </>
  );
};

export default CommandCard;
