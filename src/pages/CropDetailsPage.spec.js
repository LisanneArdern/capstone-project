import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CropDetailsPage from './CropDetailsPage'

describe('CropDetailsPage', () => {
  it('calls onClickList when clicking on back and onToggleFavorite', () => {
    const handleClickBack = jest.fn()
    const handleToggleFavorite = jest.fn()
    render(
      <CropDetailsPage
        onBack={handleClickBack}
        favoriteIds={[{ id: '1a' }, { id: '2a' }]}
        onToggleFavorite={handleToggleFavorite}
        crop={{
          attributes: {
            image: './image',
            name: 'Strawberry',
            botanicalName: 'botanical name',
            sun: 'sun',
            spread: 60,
            rowSpace: 60,
            details: 'details',
          },
        }}
      />
    )

    const buttons = screen.getAllByRole('button')
    const backButton = buttons[0]
    const favorizeButton = buttons[1]
    userEvent.click(backButton)
    expect(handleClickBack).toHaveBeenCalled()
    userEvent.click(favorizeButton)
    expect(handleToggleFavorite).toHaveBeenCalled()
  })

  it('renders crop details', () => {
    const handleClickBack = jest.fn()
    const handleToggleFavorite = jest.fn()
    render(
      <CropDetailsPage
        onBack={handleClickBack}
        favoriteIds={[{ id: '1a' }, { id: '2a' }]}
        onToggleFavorite={handleToggleFavorite}
        crop={{
          attributes: {
            main_image_path: './image',
            name: 'Strawberry',
            binomial_name: 'Fragaria',
            sun_requirements: 'Full sun',
            spread: 60,
            rowSpace: 60,
            description: 'Text',
          },
        }}
      />
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Strawberry'
    )
    const image = screen.getByRole('img')
    expect(image).toContainHTML('./image')
    expect(screen.getByText('Fragaria')).toBeInTheDocument()
    expect(screen.getByText('Full sun')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
