import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from 'app/providers/ThemeProvider';
import AvatarPng from 'shared/ui/Avatar/scale_1200.jpeg';

import { type StoryObj } from '@storybook/react';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import { type Profile } from 'entities/Profile/models/types/profile';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
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

type Story = StoryObj<typeof ProfileCard>;

const defaultData: Profile = {
  firstname: 'Name',
  lastname: 'Name2',
  age: 21,
  country: COUNTRY.Russia,
  currency: CURRENCY.RUB,
  avatar: AvatarPng,
  username: 'admin',
  id: '1'
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light = {
  args: {
    data: defaultData
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ReadOnly = {
  args: {
    data: defaultData,
    readOnly: true
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Error = {
  args: {
    data: defaultData,
    readOnly: true,
    error: 'Default Error'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Loading = {
  args: {
    data: defaultData,
    readOnly: true,
    error: 'Default Error',
    isLoading: true
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Dark: Story = {
  args: {
    data: defaultData
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
