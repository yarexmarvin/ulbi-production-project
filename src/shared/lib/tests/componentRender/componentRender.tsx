import { render } from '@testing-library/react'
import { type StateScheme, StoreProvider } from 'app/providers/StoreProvider'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { StoreProviderTest } from 'shared/config/StoreProviderTest/StoreProviderTest'
import i18nForTests from 'shared/config/i18n/i18nForTests'

interface componentRenderOptions {
  route?: string
  initialState?: StateScheme
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  const { route = '/', initialState } = options

  return render(
    <StoreProviderTest initialState={initialState} >
      <MemoryRouter initialEntries={[route]} >
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter >
    </StoreProviderTest>
  )
}
