import styled from 'styled-components/macro'

const Button = styled.button`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 1px 10px;
  text-align: center;
  margin: 0 1px 1px 0;
  font-weight: 300px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: ${props => (props.isFavorite ? '#d3d3d3' : 'white')};
`

export default Button
