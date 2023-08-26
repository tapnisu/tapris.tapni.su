import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import { defineConfig, Preset } from "twind";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
  }),
  selfURL: import.meta.url,
};
