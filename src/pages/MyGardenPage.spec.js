import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyGardenPage from './MyGardenPage'
import { MemoryRouter } from 'react-router-dom'

describe('MyGardenPage', () => {
  it('calls onClickDetails when clicking on the back button', () => {
    const handleClickList = jest.fn()
    const handleClickDetails = jest.fn()
    render(
      <MemoryRouter>
        <MyGardenPage
          favoriteIds={[{ id: '1a' }, { id: '2a' }]}
          crops={[
            {
              id: 1,
              attributes: {
                name: 'Banana',
                main_image_path: 'image',
              },
            },
          ]}
          onBack={handleClickList}
          onDetails={handleClickDetails}
        />
      </MemoryRouter>
    )

    const listButton = screen.getByText(/w*.\w*.list/gi)
    userEvent.click(listButton)
    expect(handleClickList).toHaveBeenCalled()
  })
})
