/* eslint-disable no-undef */
/* global document */
import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { OCEAN_THEME } from '../projects/ocean-ui/src/lib/theme/ocean-theme.tokens';
import { defaultOceanTheme } from '../projects/ocean-ui/src/lib/theme/ocean-theme';

const themeVars = `
:root {
  --ocean-primary: #2563EB;
  --ocean-secondary: #F59E0B;
  --ocean-success: #F59E0B;
  --ocean-error: #EF4444;
  --ocean-background: #f9fafb;
  --ocean-surface: #ffffff;
  --ocean-text: #111827;

  --ocean-radius: 12px;
  --ocean-shadow: 0 8px 24px rgba(0,0,0,0.08);
  --ocean-transition: all 160ms ease-in-out;
}
html, body {
  background: var(--ocean-background);
  color: var(--ocean-text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
.sb-show-main { padding: 16px; }
`;

function injectThemeVars() {
  if (typeof document !== 'undefined' && !document.querySelector('style[data-ocean-theme="true"]')) {
    const style = document.createElement('style');
    style.setAttribute('data-ocean-theme', 'true');
    style.innerHTML = themeVars;
    document.head.appendChild(style);
  }
}

const preview: Preview = {
  decorators: [
    (storyFunc) => {
      injectThemeVars();
      return storyFunc();
    },
    applicationConfig({
      providers: [
        { provide: OCEAN_THEME, useValue: defaultOceanTheme }
      ]
    })
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/ }
    },
    layout: 'centered',
    backgrounds: {
      default: 'Ocean',
      values: [
        { name: 'Ocean', value: '#f9fafb' },
        { name: 'Surface', value: '#ffffff' },
        { name: 'Dark', value: '#0b1020' }
      ]
    },
    options: { storySort: { order: ['Intro', 'Theme', 'Components', '*'] } }
  }
};

export default preview;
