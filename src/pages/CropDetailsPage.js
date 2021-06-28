import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'

CropDetailsPage.propTypes = {
  crop: PropTypes.object,
  favoriteCrops: PropTypes.array,
  onBack: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default function CropDetailsPage({
  crop,
  favoriteCrops,
  onBack,
  onToggleFavorite,
}) {
  const {
    id,
    attributes: {
      main_image_path: image,
      name,
      binomial_name: botanicalName,
      sun_requirements: sun,
      spread,
      row_spacing: rowSpace,
      description: details,
    },
  } = crop

  const isFavorite = favoriteCrops?.some(favoriteCrop => favoriteCrop.id === id)

  return (
    <div>
      <BackButton onClick={onBack}>&lt; back</BackButton>
      <DetailedView>
        <img src={image} alt="" width="375" height="250" />

        <Information>
          <h1>{name}</h1>
          <dl>
            <dt>Botanical Name:</dt>
            <dd>{botanicalName}</dd>
          </dl>

          <Button
            onClick={() => onToggleFavorite(crop)}
            isFavorite={isFavorite}
          >
            {isFavorite ? 'Remove from My Garden' : 'Add to My Garden'}
          </Button>

          <QuickGuide>
            <h2>Quick Guide</h2>
            <dl>
              <div>
                <dt>Need of sun</dt>
                <dd>{sun}</dd>
              </div>
              <div>
                <dt>Spread</dt>
                <dd>{spread} cm</dd>
              </div>
              <div>
                <dt>Row Space</dt>
                <dd>{rowSpace} cm</dd>
              </div>
            </dl>
          </QuickGuide>
          <h2>Details</h2>
          <p>{details}</p>
        </Information>
      </DetailedView>
    </div>
  )
}
const BackButton = styled(Button)`
  position: fixed;
  padding: 8px 12px;
  left: 10px;
  top: 10px;
  z-index: 1;
`
const DetailedView = styled.section`
  img {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    z-index: -1;
  }
`

const Information = styled.div`
  background: white;
  padding: 10px 20px;
  border-radius: 10px 10px 0px 0px;
  position: relative;
  top: 230px;
  z-index: 2;

  dl {
    display: flex;
  }
`
const QuickGuide = styled.div`
  dl {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0px 15px;
  }

  div {
    padding: 0.5em;
    border: 1px dotted lightgrey;
    border-radius: 8px;
  }
  dt {
    padding: 0;
    font-size: small;
  }

  dd {
    margin: 0;
  }
`
