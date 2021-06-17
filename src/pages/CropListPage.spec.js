import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CropListPage from './CropListPage'

describe('CropListPage', () => {
  it('renders two crops', () => {
    render(
      <CropListPage
        onClickDetails={jest.fn()}
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
      <CropListPage
        crops={[
          {
            id: 1,
            attributes: {
              name: 'Banana',
              main_image_path: 'image',
            },
          },
        ]}
        onClickDetails={handleClickDetails}
        onClickFavorites={handleClickFavorites}
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
