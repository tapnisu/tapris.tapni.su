import { ApplicationCommandOption } from "harmony/src/types/applicationCommand.ts";

export type ApplicationCommandOptionExtended = ApplicationCommandOption & {
  required: boolean;
};

export interface Command {
  name: string;
  description?: string;
  options?: ApplicationCommandOptionExtended[];
  guildsOnly?: boolean;
}
