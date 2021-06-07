import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

CropItem.propTypes = {
  name: PropTypes.node,
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

const Wrapper = styled.section`
  display: flex;
  gap: 16px;
  margin: 10px;

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
