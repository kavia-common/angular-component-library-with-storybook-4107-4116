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
