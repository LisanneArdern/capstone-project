import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyGardenPage from './MyGardenPage'

describe('MyGardenPage', () => {
  it('calls onClickDetails when clicking on the back button', () => {
    const handleClickList = jest.fn()
    const handleClickDetails = jest.fn()
    render(
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
    )

    const listButton = screen.getByText(/w*.\w*.list/gi)
    userEvent.click(listButton)
    expect(handleClickList).toHaveBeenCalled()
  })
})
