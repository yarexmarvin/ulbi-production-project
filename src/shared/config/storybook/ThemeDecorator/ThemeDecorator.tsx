import { type StoryFn } from '@storybook/react'
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider'

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => <ThemeProvider>
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
</ThemeProvider>

export default ThemeDecorator
