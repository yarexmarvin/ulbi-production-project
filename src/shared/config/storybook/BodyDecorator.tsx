import { type StoryFn } from '@storybook/react'
import { useTheme } from 'app/providers/ThemeProvider'

export const BodyDecorator = (Story: StoryFn) => {
  const { theme } = useTheme()
  return <body className={theme}>
    {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    <Story />
  </body>
}
