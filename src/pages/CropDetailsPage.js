import Button from '../components/Button'
import DetailedView from '../components/DetailedView'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

CropDetailsPage.propTypes = {
  crop: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
}

export default function CropDetailsPage({ onNavigate, crop }) {
  const { attributes } = crop
  return (
    <div>
      <BackButton onClick={onNavigate}>&lt; back</BackButton>
      <DetailedView
        image={attributes.main_image_path}
        name={attributes.name}
        botanicalName={attributes.binomial_name}
        sun={attributes.sun_requirements}
        spread={attributes.spread}
        rowSpace={attributes.row_spacing}
        details={attributes.description}
      />
    </div>
  )
}
const BackButton = styled(Button)`
  position: fixed;
`
