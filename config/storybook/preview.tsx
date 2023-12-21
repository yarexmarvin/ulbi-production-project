import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { AppDecorator } from 'shared/config/storybook/AppDecorator'
import { BodyDecorator } from 'shared/config/storybook/BodyDecorator'
import { LanguageProviderDecorator } from 'shared/config/storybook/LanguageProviderDecorator/LanguageProviderDecorator'
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator'
import StyleProvider from 'shared/config/storybook/StyleProvider/StyleProvider'

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
    LanguageProviderDecorator,
    RouterDecorator,
    StoreDecorator

  ]

}

export default preview
