import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

CropItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default function CropItem({ onClick, name, image }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <CropButton onClick={onClick}>Show more details</CropButton>
      </div>
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const CropButton = styled(Button)`
  border-color: #707070;
`
