import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchPage from './SearchPage'

describe('SearchPage', () => {
  it('renders an input field', () => {
    render(
      <SearchPage
        onDetails={jest.fn()}
        onFavorites={jest.fn()}
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
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('renders two crops', () => {
    render(
      <SearchPage
        onDetails={jest.fn()}
        onFavorites={jest.fn()}
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
    )

    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    const imageListLength = screen.getAllByRole('img').length
    expect(imageListLength).toBe(2)
  })
  it('calls correct action when clicking on buttons', () => {
    const handleClickDetails = jest.fn()
    const handleClickFavorites = jest.fn()
    render(
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
        onDetails={handleClickDetails}
        onFavorites={handleClickFavorites}
      />
    )

    const buttons = screen.getAllByRole('button')
    const detailsButton = buttons[0]
    const favoriteButton = buttons[1]
    userEvent.click(detailsButton)
    expect(handleClickDetails).toHaveBeenCalled()

    userEvent.click(favoriteButton)
    expect(handleClickFavorites).toHaveBeenCalled()
  })
})
