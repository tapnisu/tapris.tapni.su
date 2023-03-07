import { ApplicationCommandOptionExtended } from "../typings/Command.ts";

interface OptionCardProps {
  option: ApplicationCommandOptionExtended;
  id: number;
}

const OptionCard = ({ option, id }: OptionCardProps) => {
  return (
    <>
      <div className="bg-gray-900 m-2 p-8 rounded-3xl">
        <span className="text-xl text-indigo-400">{option.name}</span> -{" "}
        {option.description}
        <h6 className="text-sm text-gray-500">
          {option.required ? "Required" : ""}
        </h6>
      </div>
    </>
  );
};

export default OptionCard;
