import { IS_BROWSER } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export function Button(props: Props) {
  return (
    <div
      disabled={!IS_BROWSER}
      className="bg-indigo-400 hover:bg-indigo-600 text-white m-4 p-4 rounded-full transition-colors"
    >
      {props.children}
    </div>
  );
}
