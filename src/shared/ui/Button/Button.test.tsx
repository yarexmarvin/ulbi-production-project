import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button', () => {
  it('should render Button', () => {
    render(<Button>test</Button>)

    expect(screen.getByText('test')).toBeInTheDocument()
  })
  it('should render Button with clear theme ', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)

    expect(screen.getByText('test')).toHaveClass('clear')
  })
})
