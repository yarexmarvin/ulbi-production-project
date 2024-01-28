import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { type StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

type Story = StoryObj<typeof Skeleton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Circle: Story = {
  args: {
    height: 100,
    width: 100,
    border: '100%'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
};
export const PrimaryDark: Story = {
  args: {
    height: 100,
    width: 200
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const CircleDark: Story = {
  args: {
    height: 100,
    width: 100,
    border: '100%'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
