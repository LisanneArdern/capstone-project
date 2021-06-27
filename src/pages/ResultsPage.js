import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import CropItem from '../components/CropItem'

ResultsPage.propTypes = {
  crop: PropTypes.object,
  onBack: PropTypes.func.isRequired,
}

export default function ResultsPage({ crops, onBack, onDetails }) {
  return (
    <div>
      <BackButton onClick={onBack}>&lt; back</BackButton>
      <Output>
        <>
          {crops
            ?.filter(crop => crop.attributes.main_image_path.match(/(https)/gi))
            .map(({ id, attributes }) => (
              <CropItem
                key={id}
                name={attributes.name}
                image={attributes.main_image_path}
                onClick={() => onDetails(id)}
              />
            ))}
        </>
      </Output>
    </div>
  )
}

const BackButton = styled(Button)`
  margin: 10px 0 0 10px;
  padding: 8px 12px;
`
const Output = styled.div`
  overflow-y: auto;
`
