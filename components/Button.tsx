import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className="bg-indigo-400 hover:bg-indigo-600 text-white m-4 p-4 rounded-full transition-colors"
      type="button"
    />
  );
}
