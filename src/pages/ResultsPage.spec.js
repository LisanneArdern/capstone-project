import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ResultsPage from './ResultsPage'
import { MemoryRouter } from 'react-router-dom'

describe('ResultsPage', () => {
  it('renders two crops', () => {
    render(
      <MemoryRouter>
        <ResultsPage
          onDetails={jest.fn()}
          onBack={jest.fn()}
          crops={[
            {
              id: 1,
              attributes: {
                name: 'Banana',
                main_image_path: 'https:image',
              },
            },
            {
              id: 2,
              attributes: {
                name: 'Apple',
                main_image_path: 'https:image',
              },
            },
          ]}
        />
      </MemoryRouter>
    )

    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    const imageListLength = screen.getAllByRole('img').length
    expect(imageListLength).toBe(2)
  })
  it('calls correct action when clicking on buttons', () => {
    const handleClickBack = jest.fn()
    render(
      <MemoryRouter>
        <ResultsPage
          crops={[
            {
              id: 1,
              attributes: {
                name: 'Banana',
                main_image_path: 'image',
              },
            },
          ]}
          onDetails={jest.fn()}
          onBack={handleClickBack}
        />
      </MemoryRouter>
    )

    const BackButton = screen.getByRole('button')

    userEvent.click(BackButton)
    expect(handleClickBack).toHaveBeenCalled()
  })
})
