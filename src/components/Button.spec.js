import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('contains a text', () => {
    render(<Button onClick={() => {}}>Back</Button>)

    const button = screen.getByRole('button', { name: 'Back' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Back</Button>)

    const button = screen.getByRole('button', { name: 'Back' })
    await user.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
