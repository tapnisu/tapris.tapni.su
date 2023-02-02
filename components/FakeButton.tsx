import { IS_BROWSER } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export function Button(props: Props) {
  return (
    <div
      disabled={!IS_BROWSER}
      className="bg-indigo-400 hover:bg-indigo-600 transition-colors rounded-3xl p-4 px-10 m-2 min-w-[8rem]"
    >
      {props.children}
    </div>
  );
}
