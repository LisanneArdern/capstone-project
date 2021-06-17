import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 0.35em 1.2em;
  border: 0.1em solid black;
  border-radius: 1em;
  text-align: center;
  margin: 0 0.3em 0.3em 0;
  font-weight: 300px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: ${props => (props.isFavorite ? '#ccc' : 'white')};
`

export default Button
