
  import{render, screen} from '@testing-library/react'
  import Navigation from './{name}'
  
  describe ('Navigation', () => {
    it('renders', () => {
      render(<Navigation />)
      expect(screen.getByText('Navigation')).toBeInTheDocument()
    })
  }) 
  