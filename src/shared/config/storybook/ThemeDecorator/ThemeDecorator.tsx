import { type StoryFn } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => <div className={theme}>
  <StoryComponent />
</div>

export default ThemeDecorator
