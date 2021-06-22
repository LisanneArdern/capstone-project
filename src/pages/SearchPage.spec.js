import { render, screen } from '@testing-library/react'
import SearchPage from './SearchPage'

describe('SearchPage', () => {
  it('renders an input field', () => {
    render(
      <SearchPage
        onClickDetails={jest.fn()}
        onClickFavorites={jest.fn()}
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
})
