import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../projects/ocean-ui/**/*.stories.@(ts|mdx)',
    '../src/**/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    defaultName: 'Documentation'
  },
  core: {
    disableTelemetry: true
  }
};

export default config;
