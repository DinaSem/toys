import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import { Ysabeau } from 'next/font/google';
import { CloseButton } from './CloseButton';

const ysabeau = Ysabeau({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-ysabeau',
  display: 'swap',
});

const meta: Meta<typeof CloseButton> = {
  title: 'shared/CloseButton',
  component: CloseButton,
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

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {},
};

export const Orange: Story = {
  args: {
    color: 'orange',
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
};

export const Blue: Story = {
  args: {
    color: 'blue',
  },
};
