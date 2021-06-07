import styled from 'styled-components/macro'

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

  img {
    width: 100px;
    height: auto;
    border-radius: 8px;
  }
`
