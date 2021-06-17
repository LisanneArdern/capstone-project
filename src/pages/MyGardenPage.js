import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'
import CropItem from '../components/CropItem'

export default function MyGardenPage({
  crops,
  onClickDetails,
  onClickList,
  favoriteIds,
}) {
  const favoriteCrops = crops.filter(crop =>
    favoriteIds.find(id => id === crop.id)
  )
  return (
    <Wrapper>
      <Header>My Garden</Header>
      <Container>
        {favoriteCrops.map(({ id, attributes }) => (
          <CropItem
            key={id}
            name={attributes.name}
            image={attributes.main_image_path}
            onClick={() => onClickDetails(id)}
          />
        ))}
      </Container>
      <Button onClick={onClickList}>Back to List</Button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`

const Container = styled.div`
  overflow-y: scroll;
`
