import { render, screen } from '@testing-library/react'
import SearchPage from './SearchPage'
import { MemoryRouter } from 'react-router-dom'

describe('SearchPage', () => {
  it('renders an input field', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
