import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { type StoryObj } from '@storybook/react'
import StoreDecorator from 'shared/config/storybook/StoreDecorator'
import { defaultState } from 'app/providers/StoreProvider'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'widget/Navbar',
  component: Navbar,
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

type Story = StoryObj<typeof Navbar>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light = {
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const LightAuthorizedUser: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ ...defaultState, user: { _inited: true, authData: { id: '1', username: 'dsads' } } })
  ]
}
export const DarkAuthorizedUser: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ ...defaultState, user: { _inited: true, authData: { id: '1', username: 'dsads' } } })
  ]
}
