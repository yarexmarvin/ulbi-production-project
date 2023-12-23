import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'

const StoreDecorator = (Story: StoryFn) => <StoreProvider initialState={{ counter: { value: 10 }, user: {} }}>
  <Story />
</StoreProvider>

export default StoreDecorator
