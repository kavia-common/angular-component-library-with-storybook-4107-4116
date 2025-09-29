import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { OceanProductCardComponent } from '../lib/product-card/ocean-product-card.component';

const meta: Meta<OceanProductCardComponent> = {
  title: 'Components/Ocean Product Card',
  component: OceanProductCardComponent,
  decorators: [
    moduleMetadata({
      imports: [OceanProductCardComponent]
    })
  ],
  args: {
    imageSrc: 'assets/ocean-product.png',
    name: 'Trendy House Plant',
    subtitle: 'Calathea plant',
    price: 'Rs. 599/-',
    showCartButton: true
  }
};

export default meta;
type Story = StoryObj<OceanProductCardComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args
  })
};

export const WithoutCartButton: Story = {
  args: {
    showCartButton: false
  }
};
