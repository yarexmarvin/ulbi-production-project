import { StoryFn } from "@storybook/react"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames"



export const AppDecorator = (Story: StoryFn) => {
  const { theme } = useTheme()
  return <div className={classNames({ cls: 'app', additional: [theme] })}>
    {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    <Story />
  </div>
}