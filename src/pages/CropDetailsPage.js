import Button from '../components/Button'
import DetailedView from '../components/DetailedView'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CropDetailsPage.propTypes = {
  crop: PropTypes.object.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default function CropDetailsPage({
  onClickList,
  crop,
  favoriteId,
  onToggleFavorite,
}) {
  return (
    <div>
      <BackButton onClick={onClickList}>&lt; back</BackButton>
      <DetailedView
        crop={crop}
        favoriteId={favoriteId}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  )
}
const BackButton = styled(Button)`
  position: fixed;
  padding: 15px 25px;
  z-index: 1;
`
