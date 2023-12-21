import { type StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'shared/AppLink',
  component: AppLink,
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

type Story = StoryObj<typeof AppLink>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const PrimaryLight: Story = {
  args: {
    children: 'AppLink',
    to: '/'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const SecondaryLight: Story = {
  args: {
    children: 'AppLink',
    to: '/',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]

}

export const WithIconDark: Story = {
  args: {
    children: 'AppLink',
    icon: 'Main',
    to: '/'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
export const WithIconLight: Story = {
  args: {
    children: 'AppLink',
    icon: 'Main',
    to: '/'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]

}

export const OnlyIconDark: Story = {
  args: {
    children: 'AppLink',
    icon: 'Main',
    onlyIcon: true,
    to: '/'
  },
  decorators: [ThemeDecorator(Theme.DARK)]

}

export const OnlyIconLight: Story = {
  args: {
    children: 'AppLink',
    icon: 'Main',
    onlyIcon: true,
    to: '/'
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]

}
