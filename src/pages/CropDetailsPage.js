import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'

CropDetailsPage.propTypes = {
  crop: PropTypes.object.isRequired,
  favoriteIds: PropTypes.array,
  onClickList: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default function CropDetailsPage({
  crop,
  favoriteIds,
  onClickList,
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

  const isFavorite = favoriteIds.find(favoriteId => favoriteId === id)
    ? true
    : false
  return (
    <div>
      <BackButton onClick={onClickList}>&lt; back</BackButton>
      <DetailedView>
        <img src={image} alt="" />

        <Information>
          <h2>{name}</h2>
          <dl>
            <dt>Botanical Name:</dt>
            <dd>{botanicalName}</dd>
          </dl>

          <Button onClick={() => onToggleFavorite(id)} isFavorite={isFavorite}>
            {isFavorite ? 'Remove from My Garden' : 'Add to My Garden'}
          </Button>

          <QuickGuide>
            <h3>Quick Guide</h3>
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
          <h3>Details</h3>
          <p>{details}</p>
        </Information>
      </DetailedView>
    </div>
  )
}
const BackButton = styled(Button)`
  position: fixed;
  padding: 15px 25px;
  z-index: 1;
`
const DetailedView = styled.section`
  img {
    width: 100%;
    height: auto;
    position: sticky;
    top: 0;
    z-index: -1;
  }
`

const Information = styled.div`
  background: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
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
