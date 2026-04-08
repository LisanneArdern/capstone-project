import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CropItem from './CropItem'

describe('CropItem', () => {
  it('renders name of crop', () => {
    render(<CropItem name="Strawberry" image="./image" onClick={jest.fn} />)
    expect(screen.getByText('Strawberry')).toBeInTheDocument()
  })
  it('an image', () => {
    render(<CropItem name="Strawberry" image="./image" onClick={jest.fn} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it('calls function when clicking on section', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<CropItem name="Pineapple" image="./image" onClick={handleClick} />)
    const section = screen.getByRole('button')
    await user.click(section)
    expect(handleClick).toHaveBeenCalled()
  })
})
