import { render, screen } from '@testing-library/react'
import CropItem from './CropItem'

describe('CropItem', () => {
  it('renders', () => {
    render(<CropItem />)
    expect(screen.getByText('CropItem')).toBeInTheDocument()
  })
})
