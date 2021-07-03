import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormPage from './FormPage'
import { MemoryRouter } from 'react-router-dom'

describe('FormPage', () => {
  it('renders a form with a dropdown menu, a text input and date input', () => {
    render(<FormPage onSubmit={jest.fn} />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
  })
  it('calls on correct action when submiting form', () => {
    const submitForm = jest.fn()
    render(
      <MemoryRouter>
        <FormPage onSubmit={submitForm} />
      </MemoryRouter>
    )

    const buttons = screen.getAllByRole('button')
    const submitButton = buttons[1]
    userEvent.click(submitButton)

    expect(submitForm).toHaveBeenCalledTimes(1)
  })
  it('maps favorite Crops over options in dropdown menu', () => {
    render(
      <MemoryRouter>
        <FormPage
          onSubmit={jest.fn}
          favoriteCrops={[
            {
              id: 1,
              attributes: {
                name: 'Banana',
              },
            },
            {
              id: 2,
              attributes: {
                name: 'Pineapple',
              },
            },
          ]}
        />
      </MemoryRouter>
    )

    const options = screen.getAllByRole('option')
    const firstOption = options[0]
    const secondOption = options[1]

    expect(firstOption).toHaveTextContent('Banana')
    expect(secondOption).toHaveTextContent('Pineapple')
  })
})
