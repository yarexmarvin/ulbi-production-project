import { type StoryFn } from '@storybook/react';
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={theme}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);

export default ThemeDecorator
