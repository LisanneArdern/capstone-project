import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './{name}'

describe('Button', () => {
  it('contains a text', () => {
    render(<Button onClick={() => {}}>Back</Button>)

    const button = screen.getByRole('button', { name: 'Back' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Back</Button>)

    const button = screen.getByRole('button', { name: 'Back' })
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
