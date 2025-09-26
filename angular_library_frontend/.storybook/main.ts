import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(ts|mdx)',
    '../projects/**/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-themes'
  ],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    defaultName: 'Docs'
  }
};

export default config;
