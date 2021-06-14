import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CropDetailsPage from './CropDetailsPage'

describe('CropDetailsPage', () => {
  it('calls onNavigate when clicking on back', () => {
    const handleClickBack = jest.fn()
    render(
      <CropDetailsPage
        onNavigate={handleClickBack}
        crop={{
          attributes: {
            main_image_path: 'image',
            name: 'Banana',
            binomial_name: 'Botanic name',
            sun_requirements: 'Full sun',
            spread: 90,
            row_spacing: 40,
            description: 'Detail text',
          },
        }}
      />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(handleClickBack).toHaveBeenCalled()
  })
})
