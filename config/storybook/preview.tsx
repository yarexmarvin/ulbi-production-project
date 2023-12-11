import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { AppDecorator } from 'shared/config/storybook/AppDecorator'
import { LanguageProviderDecorator } from 'shared/config/storybook/LanguageProviderDecorator/LanguageProviderDecorator'
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import StyleProvider from 'shared/config/storybook/StyleProvider/StyleProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator/ThemeProvider'
import { classNames } from 'shared/lib/classNames'

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
    ThemeProviderDecorator,
    LanguageProviderDecorator,
    RouterDecorator,


  ]

}

export default preview
