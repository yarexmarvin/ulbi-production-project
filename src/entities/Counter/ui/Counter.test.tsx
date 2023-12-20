/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react'
import { Counter } from 'entities/Counter/ui/Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter', () => {
  it('should render Counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    })

    expect(screen.getByTestId('value')).toHaveTextContent('10')
  })
  it('should render increment counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    })

    fireEvent.click(screen.getByTestId('increment-btn'))

    expect(screen.getByTestId('value')).toHaveTextContent('11')
  })
  it('should render decrement counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    })

    fireEvent.click(screen.getByTestId('decrement-btn'))

    expect(screen.getByTestId('value')).toHaveTextContent('9')
  })
})
