import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CropItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default function CropItem({ onClick, name, image }) {
  return (
    <Wrapper role="button" onClick={onClick}>
      <img src={image} alt="" width="100" height="66" />
      <h2>{name}</h2>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  gap: 16px;
  margin: 10px;
  padding: 0.35em;
  border: 0.1em solid #d3d3d3;
  border-radius: 1em;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  img {
    height: auto;
    height: 66px;
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
