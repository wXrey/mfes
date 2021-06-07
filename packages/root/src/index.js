import { registerApplication, start } from "single-spa";

registerApplication(
  "react-todoInput",
  () => import("mfeReact/todo"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "svelte-showTodos",
  () => import("mfeSvelte/todo"),
  (location) => location.pathname.startsWith("/")
);

start();
