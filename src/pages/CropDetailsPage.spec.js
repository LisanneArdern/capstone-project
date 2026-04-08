import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import CropDetailsPage from './CropDetailsPage'

jest.mock('../hooks/useCropDetails.js', () => () => ({
  data: {
    attributes: {
      main_image_path: 'image.png',
      name: 'Tomato',
      binomial_name: 'Solanum lycopersicum',
      sun_requirements: 'full sun',
      spread: 30,
      row_spacing: 40,
      description: 'A productive crop.',
    },
  },
  isQuerying: false,
}))

describe('CropDetailsPage', () => {
  it('renders crop details', () => {
    render(
      <MemoryRouter initialEntries={['/crop/1']}>
        <Routes>
          <Route
            path="/crop/:id"
            element={
              <CropDetailsPage
                favoriteCrops={[]}
                onBack={jest.fn()}
                onToggleFavorite={jest.fn()}
                onFavorites={jest.fn()}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Tomato' })).toBeInTheDocument()
  })
})
