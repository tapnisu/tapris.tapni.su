import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa"],
        serif: ["Comfortaa"],
        mono: ["Comfortaa"],
        display: ["Comfortaa"],
        body: ["Comfortaa"],
      },
    },
    colors: {
      blue: colors.blue,
      black: colors.black,
      gray: colors.gray,
      indigo: colors.indigo,
      green: colors.green,
      white: colors.white,
      yellow: colors.yellow,
      transparent: "transparent",
    },
  },
} as Options;