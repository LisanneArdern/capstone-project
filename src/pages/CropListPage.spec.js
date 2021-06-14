import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CropListPage from './CropListPage'

describe('CropListPage', () => {
  it('renders two crops', () => {
    render(
      <CropListPage
        onNavigate={jest.fn()}
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

  it('calls onNavigate when clickling on crop', () => {
    const handleClickDetails = jest.fn()
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
        onNavigate={handleClickDetails}
      />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(handleClickDetails).toHaveBeenCalled()
  })
})
