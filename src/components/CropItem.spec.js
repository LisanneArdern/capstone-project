import { render, screen } from '@testing-library/react'
import CropItem from './CropItem'

describe('CropItem', () => {
  it('renders name of crop', () => {
    render(<CropItem name="Strawberry" />)
    expect(screen.getByText('Strawberry')).toBeInTheDocument()
  })
  it('an image', () => {
    render(<CropItem />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
