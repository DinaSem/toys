import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'widgets/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ position: 'relative', marginTop: '100px', paddingTop: '30px' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Slider>;

const slides = [1, 2, 3, 4, 5].map(el => (
  <div key={el} style={{ width: '300px', height: '200px', backgroundColor: 'grey' }}>
    {el}
  </div>
));

export const Default: Story = {
  args: {
    slides: slides,
    color: 'orange',
  },
};

export const Blue: Story = {
  args: {
    slides: slides,
    color: 'blue',
  },
};

export const Yellow: Story = {
  args: {
    slides: slides,
    color: 'yellow',
  },
};
