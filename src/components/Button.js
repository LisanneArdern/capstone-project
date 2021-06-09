import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  padding: 0.35em 1.2em;
  border: 0.1em solid black;
  border-radius: 1em;
  text-align: center;
  margin: 0 0.3em 0.3em 0;
  font-weight: 300px;
  background-color: ${props => (props.isActive ? '#ccc' : 'white')};
`

Button.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
}

function Button(props) {
  return <ButtonStyled {...props} />
}

export default Button
