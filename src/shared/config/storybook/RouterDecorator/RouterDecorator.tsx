import { type StoryFn } from '@storybook/react'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

const RouterDecorator = (Story: StoryFn) => <BrowserRouter>
  <Story />
</BrowserRouter>

export default RouterDecorator
