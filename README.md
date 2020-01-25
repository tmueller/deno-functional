# Deno VSCode starter

A Deno 0.27 starter boilerplate for VSCode as of typescript v3.7.4

## How to use

1. Clone this repo
2. Install [justjavac's Deno plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=justjavac.vscode-deno)
3. Run `yarn install`
4. From a `.ts` file, run the `TypeScript: Select TypeScript Version...` VSCode command and select `Use Workspace Version` (should be already selected)
5. Run the `deno: Enable Deno` VSCode command (may be already enabled)

## Yarn scripts

- `serve` : runs the program from the `main.ts` file
- `test` : runs all the tests in the `test/` folder
- `update` : updates the lib files. WARNING: this does not updates the deno version.

## Known caveats

- The `tsconfig.json` file has a linting problem
