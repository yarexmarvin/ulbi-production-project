import { type StoryObj } from '@storybook/react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import AvatarPng from 'shared/ui/Avatar/scale_1200.jpeg'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'shared/Avatar',
  component: Avatar,
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

type Story = StoryObj<typeof Avatar>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    src: AvatarPng
  }
}

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarPng
  }
}

export const Big: Story = {
  args: {
    size: 250,
    src: AvatarPng
  }
}
