import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import useCropDetails from '../hooks/useCropDetails.js'

CropDetailsPage.propTypes = {
  favoriteCrops: PropTypes.array,
  onBack: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default function CropDetailsPage({
  favoriteCrops,
  onBack,
  onToggleFavorite,
}) {
  const { id } = useParams()
  const { data, isQuerying } = useCropDetails(id)

  const isFavorite = favoriteCrops?.some(favoriteCrop => favoriteCrop.id === id)

  if (isQuerying)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )

  const {
    attributes: {
      main_image_path: image,
      name,
      binomial_name: botanicalName,
      sun_requirements: sun,
      spread,
      row_spacing: rowSpace,
      description: details,
    },
  } = data
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

          <FavoriteButton
            onClick={() => onToggleFavorite(data)}
            isFavorite={isFavorite}
          >
            {isFavorite ? 'Remove from My Garden' : 'Add to My Garden'}
          </FavoriteButton>

          <QuickGuide>
            <h2>Quick Guide</h2>
            <dl>
              <div>
                <dt>Need of sun</dt>
                <dd>{sun !== null ? sun : <span>unknown</span>}</dd>
              </div>
              <div>
                <dt>Spread</dt>
                <dd>
                  {spread !== null ? (
                    <span>{spread} cm</span>
                  ) : (
                    <span>unknown</span>
                  )}
                </dd>
              </div>
              <div>
                <dt>Row Space</dt>
                <dd>
                  {rowSpace !== null ? (
                    <span>{rowSpace} cm</span>
                  ) : (
                    <span>unknown</span>
                  )}
                </dd>
              </div>
            </dl>
          </QuickGuide>
          <h2>Details</h2>
          <p>
            {details !== null ? (
              details
            ) : (
              <span>
                Unfortunately, the description of this crop is not yet
                available. Please be patient and check back later, thank you.
              </span>
            )}
          </p>
        </Information>
      </DetailedView>
    </div>
  )
}
const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`
const BackButton = styled(Button)`
  position: fixed;
  padding: 12px 16px;
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
const FavoriteButton = styled(Button)`
  width: 100%;
  padding: 10px 20px;
  background-color: ${props =>
    props.isFavorite ? '#418151' : 'var(--color-dark-green)'};
  /* background: var(--color-dark-green); */
  color: white;
`
