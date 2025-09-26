import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f9fafb' },
        { name: 'dark', value: '#111827' }
      ]
    },
    layout: 'padded'
  }
};

export default preview;
