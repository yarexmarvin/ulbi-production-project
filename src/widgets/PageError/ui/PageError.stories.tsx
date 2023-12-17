import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { PageError } from './PageError'
import { Theme } from 'app/providers/ThemeProvider'
import { type StoryObj } from '@storybook/react'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'widget/PageError',
  component: PageError,
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

type Story = StoryObj<typeof PageError>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dark = {

}
export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)]

}
