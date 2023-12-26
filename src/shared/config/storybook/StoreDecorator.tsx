import { type StoryFn } from '@storybook/react'
import { StoreProvider, defaultState } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'

const StoreDecorator = (Story: StoryFn) => <StoreProvider initialState={defaultState}>
  <Story />
</StoreProvider>

export default StoreDecorator
