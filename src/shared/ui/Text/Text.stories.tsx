import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text'
import { type StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'shared/Text',
  component: Text,
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

type Story = StoryObj<typeof Text>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'text text text text text'
  }
}

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'text text text text text',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'text text text text text'
  }
}

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'text text text text text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTextDark: Story = {
  args: {
    text: 'text text text text text'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
