import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'Demo/App',
  component: AppComponent
};

export default meta;
export const Default: StoryObj<AppComponent> = {
  render: (args) => ({
    props: args
  })
};
