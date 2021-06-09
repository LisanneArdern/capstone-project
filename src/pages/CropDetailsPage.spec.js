
  import{render, screen} from '@testing-library/react'
  import CropPage from './{name}'
  
  describe ('CropPage', () => {
    it('renders', () => {
      render(<CropPage />)
      expect(screen.getByText('CropPage')).toBeInTheDocument()
    })
  }) 
  