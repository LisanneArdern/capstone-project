import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components/macro'
import CropItem from '../components/CropItem'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Background from '../images/vegetables.png'

MyGardenPage.propTypes = {
  onDetails: PropTypes.func.isRequired,
  favoriteCrops: PropTypes.array,
}

export default function MyGardenPage({ onDetails, favoriteCrops }) {
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

const Wrapper = styled.section`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: 100vh;
  animation-duration: 1s;
  animation-name: ${fadein};
`
const PageHeader = styled(Header)`
  border-bottom: 1px solid var(--color-secondary);
  background-color: var(--color-primary-alpha);
`

const Container = styled.div`
  background-color: var(--color-primary-alpha);
  overflow-y: scroll;
`
const Paragraph = styled.p`
  text-align: center;
  margin: 50px 0;
`
