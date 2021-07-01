import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components/macro'
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
      <PageHeader>My Garden</PageHeader>
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

const PageHeader = styled(Header)`
  border-bottom: 1px solid var(--color-dark-green);
`

const Wrapper = styled.section`
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
