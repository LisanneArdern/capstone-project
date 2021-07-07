import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyGardenPage from './MyGardenPage'
import { MemoryRouter } from 'react-router-dom'

describe('MyGardenPage', () => {
  it('renders favorite crops and calls onDetails when clicking on a favorized crop', () => {
    const handleClickDetails = jest.fn()
    render(
      <MemoryRouter>
        <MyGardenPage
          favoriteCrops={[
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
          onDetails={handleClickDetails}
        />
      </MemoryRouter>
    )
    const banana = screen.getByText(/([b])\w+/gi)
    userEvent.click(banana)
    expect(handleClickDetails).toHaveBeenCalled()

    const apple = screen.getByText(/(ap)\w+/gi)
    expect(apple).toBeInTheDocument()
  })
})
