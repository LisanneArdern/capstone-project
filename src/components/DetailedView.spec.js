import { render, screen } from '@testing-library/react'
import DetailedView from './DetailedView'

describe('DetailedView', () => {
  it('renders the name as a heading', () => {
    render(
      <DetailedView
        image="./image"
        name="Strawberry"
        botanicalName="botanical name"
        sun="sun"
        spread={60}
        rowSpace={60}
        details="details"
      />
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Strawberry'
    )
  })

  it('renders image', () => {
    render(
      <DetailedView
        image="./image"
        name="Strawberry"
        botanicalName="botanical name"
        sun="sun"
        spread={60}
        rowSpace={60}
        details="details"
      />
    )
    const image = screen.getByRole('img')
    expect(image).toContainHTML('./image')
  })

  it('renders botanical name, sun requirement and details', () => {
    render(
      <DetailedView
        image="./image"
        name="Strawberry"
        botanicalName="Malus"
        sun="Full sun"
        spread={60}
        rowSpace={60}
        details="Text"
      />
    )
    expect(screen.getByText('Malus')).toBeInTheDocument()
    expect(screen.getByText('Full sun')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
