import { type StoryFn } from '@storybook/react'
import { type StateScheme } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'
import { StoreProviderTest } from 'shared/config/StoreProviderTest/StoreProviderTest'

const StoreDecorator = (defaultState: StateScheme) => (Story: StoryFn) => <StoreProviderTest initialState={defaultState}>
  <Story />
</StoreProviderTest>

export default StoreDecorator
