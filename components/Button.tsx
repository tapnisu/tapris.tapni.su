import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className="bg-indigo-400 hover:bg-indigo-600 transition-colors rounded-3xl p-4 px-10 m-2 min-w-[8rem]"
      type="button"
    />
  );
}
