/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
  it('should render Sidebar', () => {
    componentRender(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  it('should collapse Sidebar', () => {
    componentRender(<Sidebar />)

    const toggleBtn = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
