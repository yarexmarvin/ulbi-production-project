/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
  it('should render Sidebar', () => {
    renderWithTranslation(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  it('should collapse Sidebar', () => {
    renderWithTranslation(<Sidebar />)

    const toggleBtn = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
