# angular-component-library-with-storybook-4107-4116

Workspace notes:
- Angular 19.2.1 is used throughout. All @angular/* packages are pinned to the exact same version as required.
- Storybook packages are pinned to a prerelease (8.4.0-alpha.3) to avoid peer conflicts with @angular-devkit/build-angular@19.
- If your environment blocks prereleases, install with `npm i --legacy-peer-deps` as a temporary workaround, understanding the tradeoffs.