# Angular + Ocean UI + Storybook

This workspace includes:
- An Angular application for quick demos.
- A reusable component library: `ocean-ui` following the Ocean Professional theme.
- Storybook for interactive development, testing, and documentation.

## Scripts
- `npm run start` — Run the Angular demo app (http://localhost:3000).
- `npm run build` — Build the Angular app.
- `npm run build:ocean-ui` — Build the library.
- `npm run storybook` — Start Storybook (http://localhost:6006).
- `npm run build-storybook` — Build static Storybook.

## Angular 19 + Storybook compatibility notes

This project uses Angular 19.2.1 and `@angular-devkit/build-angular@19.2.1`. Storybook stable 8.3.x has a peer constraint requiring `@angular-devkit/build-angular < 19`, which causes `npm ERR! ERESOLVE` during install.

To resolve:
- We pin Storybook to a prerelease that loosens Angular peer constraints:
  - `@storybook/*` version: `8.4.0-alpha.3`.
- If your environment cannot fetch prereleases, install with legacy peer resolution:
  - `npm i --legacy-peer-deps`
  - Be aware this bypasses peer checks. Prefer the prerelease pin used in package.json.

Verify:
1) Install dependencies:
```
npm ci
```
(if that fails due to registry policies, try `npm i --legacy-peer-deps`)

2) Build Angular app:
```
npm run build
```

3) Start Storybook:
```
npm run storybook
```

## Library usage
Import `OceanUiModule.forRoot()` and use components:
```html
<ocean-button>Click me</ocean-button>
<ocean-card title="Hello" subtitle="Ocean"></ocean-card>
```

All components use the Ocean Professional theme:
- Primary: #2563EB
- Secondary: #F59E0B
- Error: #EF4444
- Surface: #ffffff
- Background: #f9fafb
- Text: #111827
