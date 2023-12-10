import { type StoryFn } from "@storybook/react";
import { ThemeProvider } from 'app/providers/ThemeProvider'



export const ThemeProviderDecorator = (Story: StoryFn) => {
return <ThemeProvider><Story /></ThemeProvider>
}