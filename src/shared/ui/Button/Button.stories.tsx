import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ThemeButton } from './Button'
import { Theme } from 'app/providers/ThemeProvider'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
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
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    children: 'Text'
  }
}

export const Clear = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
}

export const Outline = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}

export const Small = {
  args: {
    size: 'small',
    label: 'Button'
  }
}
