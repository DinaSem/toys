import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';
import '@/app/styles/index.scss';
import { Ysabeau } from 'next/font/google';

const ysabeau = Ysabeau({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-ysabeau',
  display: 'swap',
});

const meta: Meta<typeof ArrowButton> = {
  title: 'shared/ArrowButton',
  component: ArrowButton,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={ysabeau.className}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ArrowButton>;

export const Default: Story = {
  args: {
    type: 'right',
  },
};

export const Yellow: Story = {
  args: {
    type: 'left',
    color: 'yellow',
  },
};

export const Blue: Story = {
  args: {
    type: 'right',
    color: 'blue',
  },
};
