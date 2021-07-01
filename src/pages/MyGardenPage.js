import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components/macro'
// import Button from '../components/Button'
import CropItem from '../components/CropItem'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

MyGardenPage.propTypes = {
  crops: PropTypes.array,
  onDetails: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  favoriteCrops: PropTypes.array,
}

export default function MyGardenPage({ onDetails, onBack, favoriteCrops }) {
  return (
    <Wrapper>
      <Header>My Garden</Header>
      <Container>
        {favoriteCrops.length === 0 ? (
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
      <Navigation />
      {/* <BackToListButton onClick={onBack}>Back to List</BackToListButton> */}
    </Wrapper>
  )
}
const fadein = keyframes`
from {
 opacity: 0;
}
to {
  opacity: 1;
}
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: 100vh;
  animation-duration: 1s;
  animation-name: ${fadein};
`

const Container = styled.div`
  overflow-y: scroll;
`
const Paragraph = styled.p`
  text-align: center;
  margin: 50px 0;
`
// const BackToListButton = styled(Button)`
//   margin: 0 10px;
// `
