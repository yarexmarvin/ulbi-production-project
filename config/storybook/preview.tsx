import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { AppDecorator } from 'shared/config/storybook/AppDecorator'
import { LanguageProviderDecorator } from 'shared/config/storybook/LanguageProviderDecorator/LanguageProviderDecorator'
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator'
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
    // сначала обертка app потом провайдер
    StyleProvider,
    AppDecorator,
    // ThemeProviderDecorator,
    ThemeDecorator(Theme.LIGHT),
    LanguageProviderDecorator,
    RouterDecorator

  ]

}

export default preview
