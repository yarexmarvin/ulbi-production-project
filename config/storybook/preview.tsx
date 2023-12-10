import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import StyleProvider from 'shared/config/storybook/StyleProvider/StyleProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    // (Story) => {
    //   // const { theme } = useTheme()

    //   return <div className={classNames({ cls: '', additional: ['light'] })}>
    //     {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //     <Story />
    //   </div>
    // }
    StyleProvider,
    ThemeDecorator(Theme.LIGHT)

  ]

}

export default preview
