import styled from 'styled-components/macro'
import CropItem from '../components/CropItem'
import PropTypes from 'prop-types'
import Button from '../components/Button'

CropListPage.propTypes = {
  crops: PropTypes.array.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default function CropListPage({
  crops,
  onClickDetails,
  onClickFavorites,
}) {
  return (
    <Wrapper>
      <Container>
        {crops.map(({ id, attributes }) => (
          <CropItem
            key={id}
            name={attributes.name}
            image={attributes.main_image_path}
            onClick={() => onClickDetails(id)}
          />
        ))}
      </Container>

      <Button onClick={onClickFavorites}>My Garden</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
`

const Container = styled.div`
  overflow-y: scroll;
`
