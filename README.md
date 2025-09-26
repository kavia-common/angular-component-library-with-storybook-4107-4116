# angular-component-library-with-storybook-4107-4116

Workspace notes:
- Angular 19.2.1 is used throughout. All @angular/* packages are pinned to the exact same version as required.
- Storybook packages are pinned to a prerelease (8.4.0-alpha.3) to avoid peer conflicts with @angular-devkit/build-angular@19.
- If your environment blocks prereleases, install with `npm i --legacy-peer-deps` as a temporary workaround, understanding the tradeoffs.

Troubleshooting Storybook:
- Ensure the CLI is pinned: devDependency `"storybook": "@storybook/cli@8.4.0-alpha.3"` is added to avoid NPX fetching Storybook 9.x.
- Scripts call the local CLI directly: `node ./node_modules/@storybook/cli/bin/index.js dev -p 6006`.
- If `npm ci` fails due to peer conflicts, prefer `npm i --legacy-peer-deps`.
- Node.js 18.x works with Storybook 8.x; if you see a prompt requiring Node 20, ensure you are not pulling Storybook 9 via `npx storybook`.