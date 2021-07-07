import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders 3 links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })
})
