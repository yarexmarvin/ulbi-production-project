import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { LoginForm } from './LoginForm'
import { Theme } from 'app/providers/ThemeProvider'
import { type StoryObj } from '@storybook/react'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'features/LoginForm',
  component: LoginForm,
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

type Story = StoryObj<typeof LoginForm>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {

  }
}
export const Dark: Story = {
  args: {

  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
