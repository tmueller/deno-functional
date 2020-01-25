import { cyan, bold } from "./deps.ts";

console.log(cyan(bold("Architecture:")), Deno.build.arch);
console.log(cyan(bold("Platform:")), Deno.build.os);
console.log();
console.log(cyan(bold("args:")), window.Deno.args);
