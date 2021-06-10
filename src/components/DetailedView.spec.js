import { render, screen } from '@testing-library/react'
import DetailedView from './DetailedView'

describe('DetailedView', () => {
  it('renders the name as a heading', () => {
    render(<DetailedView name="Strawberry" />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Strawberry'
    )
  })

  it('renders image', () => {
    render(<DetailedView />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders botanical name, sun requirement and details', () => {
    render(<DetailedView botanicalName="Malus" sun="Full sun" details="Text" />)
    expect(screen.getByText('Malus')).toBeInTheDocument()
    expect(screen.getByText('Full sun')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
