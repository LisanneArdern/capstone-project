import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CropItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default function CropItem({ onClick, name, image }) {
  return (
    <Wrapper onClick={onClick} role="button">
      <img src={image} alt="" width="100" height="66" />
      <h2>{name}</h2>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: white;
  display: flex;
  gap: 16px;
  margin: 10px;
  padding: 5px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: 0px 8px 15px var(--color-shadow);

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
