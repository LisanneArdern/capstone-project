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
  isFavorite,
  onToggleFavorite,
}) {
  const { id, attributes } = crop
  return (
    <div>
      <BackButton onClick={onClickList}>&lt; back</BackButton>
      <DetailedView
        image={attributes.main_image_path}
        name={attributes.name}
        botanicalName={attributes.binomial_name}
        sun={attributes.sun_requirements}
        spread={attributes.spread}
        rowSpace={attributes.row_spacing}
        details={attributes.description}
        onClick={isFavorite}
        onToggleFavorite={() => onToggleFavorite(id)}
        // id={id}
      />
    </div>
  )
}
const BackButton = styled(Button)`
  position: fixed;
  padding: 15px 25px;
  z-index: 1;
`
