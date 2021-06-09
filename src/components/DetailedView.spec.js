import { render, screen } from '@testing-library/react'
import DetailedView from './DetailedView'

describe('DetailedView', () => {
  it('renders the name as a heading', () => {
    render(<DetailedView name="Strawberry" />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Strawberry'
    )
  })

  it('renders 3 listitems', () => {
    render(<DetailedView />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
