
  import{render, screen} from '@testing-library/react'
  import CropListPage from './{name}'
  
  describe ('CropListPage', () => {
    it('renders', () => {
      render(<CropListPage />)
      expect(screen.getByText('CropListPage')).toBeInTheDocument()
    })
  }) 
  