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
  // it('renders two crops', () => {
  //   render(
  //     <SearchPage
  //       onDetails={jest.fn()}
  //       onFavorites={jest.fn()}
  //       crops={[
  //         {
  //           id: 1,
  //           attributes: {
  //             name: 'Banana',
  //             main_image_path: 'image',
  //           },
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             name: 'Apple',
  //             main_image_path: 'image',
  //           },
  //         },
  //       ]}
  //     />
  //   )

  //   expect(screen.getByText('Banana')).toBeInTheDocument()
  //   expect(screen.getByText('Apple')).toBeInTheDocument()
  //   const imageListLength = screen.getAllByRole('img').length
  //   expect(imageListLength).toBe(2)
  // })
  it('calls correct action when clicking on button', () => {
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
        onFavorites={handleClickFavorites}
      />
    )

    const favoriteButton = screen.getByRole('button')
    userEvent.click(favoriteButton)
    expect(handleClickFavorites).toHaveBeenCalled()
  })
})
