import styled from 'styled-components/macro'
import Button from '../components/Button'
import CropItem from '../components/CropItem'

export default function MyGardenPage({
  favoriteCrops,
  onClickDetails,
  onClickList,
}) {
  return (
    <Wrapper>
      <h1>My Garden</h1>
      {favoriteCrops.map(({ id, attributes }) => (
        <CropItem
          key={id}
          name={attributes.name}
          image={attributes.main_image_path}
          onClick={onClickDetails}
        />
      ))}
      <Button onClick={onClickList}>Back to List</Button>
    </Wrapper>
  )
}
const Wrapper = styled.section``
