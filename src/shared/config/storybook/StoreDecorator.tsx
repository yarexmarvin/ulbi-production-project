import { type StoryFn } from '@storybook/react'
import { type StateScheme, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'

const StoreDecorator = (defaultState: StateScheme) => (Story: StoryFn) => <StoreProvider initialState={defaultState}>
  <Story />
</StoreProvider>

export default StoreDecorator
