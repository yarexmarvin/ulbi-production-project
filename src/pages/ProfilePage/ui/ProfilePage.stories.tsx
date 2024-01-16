import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from 'app/providers/ThemeProvider'
import { defaultState } from 'app/providers/StoreProvider/config/store'

import { type StoryObj } from '@storybook/react'
import AvatarPng from 'shared/ui/Avatar/scale_1200.jpeg'

import { ProfilePage } from 'pages/ProfilePage'
import StoreDecorator from 'shared/config/storybook/StoreDecorator'
import { COUNTRY } from 'entities/Country'
import { CURRENCY } from 'entities/Currency'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
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
}

type Story = StoryObj<typeof ProfilePage>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light = {
  args: {

  },
  decorators: [StoreDecorator({
    ...defaultState,
    profile: {
      data: null,
      error: '',
      validateErrors: [],
      isLoading: false,
      form: {
        firstname: 'Name',
        lastname: 'Name2',
        age: 21,
        country: COUNTRY.Russia,
        currency: CURRENCY.RUB,
        avatar: AvatarPng,
        username: 'admin'
      },
      readonly: false
    }
  }

  )]
}

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
