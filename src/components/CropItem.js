import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

CropItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.node,
}

export default function CropItem({ name, image }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </Wrapper>
  )
}

const Wrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1rem;
  padding-left: 0.5em;

  img {
    width: 100px;
    height: auto;
    max-height: 75px;
    border-radius: 8px;
  }

  h2 {
    font-size: 1em;
    font-weight: 300;
  }
`
