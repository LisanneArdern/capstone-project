import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchPage from './SearchPage'
import { MemoryRouter } from 'react-router-dom'

describe('SearchPage', () => {
  it('renders an input field', () => {
    render(
      <MemoryRouter>
        <SearchPage
          onFavorites={jest.fn()}
          setSearchTerm={jest.fn()}
          onSubmit={jest.fn()}
          crops={[
            {
              id: 1,
              attributes: {
                name: 'Banana',
                main_image_path: 'image',
              },
            },
            {
              id: 2,
              attributes: {
                name: 'Apple',
                main_image_path: 'image',
              },
            },
          ]}
        />
      </MemoryRouter>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('calls correct action when clicking on button', () => {
    const handleClickFavorites = jest.fn()
    render(
      <MemoryRouter>
        <SearchPage
          crops={[
            {
              id: 1,
              attributes: {
                name: 'Banana',
                main_image_path: 'image',
              },
            },
          ]}
          onSubmit={jest.fn()}
          onFavorites={handleClickFavorites}
          setSearchTerm={jest.fn()}
        />
      </MemoryRouter>
    )

    const favoriteButton = screen.getByRole('button')
    userEvent.click(favoriteButton)
    expect(handleClickFavorites).toHaveBeenCalled()
  })
})
