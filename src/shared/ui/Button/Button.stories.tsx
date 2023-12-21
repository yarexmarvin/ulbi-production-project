import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ThemeButton } from './Button'
import { Theme } from 'app/providers/ThemeProvider'
import { type StoryObj } from '@storybook/react'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'shared/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
}

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}
export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
