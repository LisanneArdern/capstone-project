import { render, screen } from '@testing-library/react'
import CropItem from './CropItem'

describe('CropItem', () => {
  it('renders name of crop', () => {
    render(<CropItem name="Strawberry" image="./image" onClick={jest.fn} />)
    expect(screen.getByText('Strawberry')).toBeInTheDocument()
  })
  it('an image', () => {
    render(<CropItem image="./image" onClick={jest.fn} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
