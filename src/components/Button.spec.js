
  import{render, screen} from '@testing-library/react'
  import Button from './{name}'
  
  describe ('Button', () => {
    it('renders', () => {
      render(<Button />)
      expect(screen.getByText('Button')).toBeInTheDocument()
    })
  }) 
  