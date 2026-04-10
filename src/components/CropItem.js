import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  background: var(--color-surface);
  display: flex;
  gap: 16px;
  margin: 12px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  box-shadow: 0 10px 24px var(--color-shadow);
  transition:
    transform 120ms ease,
    box-shadow 120ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 28px var(--color-shadow);
  }

  img {
    object-fit: cover;
    height: 66px;
    border-radius: 10px;
  }
  h2 {
    font-size: 1em;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
