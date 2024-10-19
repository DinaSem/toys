import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import '@/app/styles/index.scss';
import { Ysabeau } from 'next/font/google';

const ysabeau = Ysabeau({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-ysabeau',
  display: 'swap',
});

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
  },
};

export const Yellow: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
    color: 'yellow',
  },
};

export const Blue: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
    color: 'blue',
  },
};

export const TransparentOrange: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
    color: 'orange',
    transparent: true,
  },
};

export const TransparentYellow: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
    color: 'yellow',
    transparent: true,
  },
};

export const TransparentBlue: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
    color: 'blue',
    transparent: true,
  },
};

export const BlueTab: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
    color: 'blue',
    variaton: 'tab',
  },
};

export const TransparentOrangeMenuBtn: Story = {
  args: {
    type: 'button',
    children: 'Кнопка',
    color: 'orange',
    transparent: true,
    variaton: 'menu',
  },
};
