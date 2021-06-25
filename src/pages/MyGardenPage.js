import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import CropItem from '../components/CropItem'
import Header from '../components/Header'

MyGardenPage.propTypes = {
  crops: PropTypes.array.isRequired,
  onDetails: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  favoriteIds: PropTypes.array,
}

export default function MyGardenPage({
  crops,
  onDetails,
  onBack,
  favoriteIds,
}) {
  const favoriteCrops = crops.filter(crop =>
    favoriteIds.find(id => id === crop.id)
  )
  return (
    <Wrapper>
      <Header>My Garden</Header>
      <Container>
        {favoriteIds.length === 0 ? (
          <Paragraph>
            Your garden is still empty.
            <br />
            Click on the button below and choose your favorite crop.
          </Paragraph>
        ) : (
          <>
            {favoriteCrops.map(({ id, attributes }) => (
              <CropItem
                key={id}
                name={attributes.name}
                image={attributes.main_image_path}
                onClick={() => onDetails(id)}
              />
            ))}
          </>
        )}
      </Container>
      <BackToListButton onClick={onBack}>Back to List</BackToListButton>
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
const Paragraph = styled.p`
  text-align: center;
  margin: 50px 0;
`
const BackToListButton = styled(Button)`
  margin: 0 10px;
`
