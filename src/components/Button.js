import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  padding: 0.35em 1.2em;
  border-radius: 0.12em;
  text-align: center;
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
