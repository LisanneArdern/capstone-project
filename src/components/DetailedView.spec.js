
  import{render, screen} from '@testing-library/react'
  import DetailedView from './{name}'
  
  describe ('DetailedView', () => {
    it('renders', () => {
      render(<DetailedView />)
      expect(screen.getByText('DetailedView')).toBeInTheDocument()
    })
  }) 
  