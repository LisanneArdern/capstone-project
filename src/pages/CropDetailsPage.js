import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
import useCropDetails from '../hooks/useCropDetails.js'
import Arrow from '../images/left-arrow.png'

CropDetailsPage.propTypes = {
  favoriteCrops: PropTypes.array,
  onBack: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
}

export default function CropDetailsPage({
  favoriteCrops,
  onBack,
  onToggleFavorite,
  onFavorites,
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
    <Wrapper>
      <BackButton onClick={onBack}>
        <ArrowLeft src={Arrow} alt="back" />
      </BackButton>
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
          <Details>
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
          </Details>
          <NavigateFavoritesButton onClick={onFavorites}>
            Go to My Garden
          </NavigateFavoritesButton>
        </Information>
      </DetailedView>
    </Wrapper>
  )
}
const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`
const fadein = keyframes`
from {
 opacity: 0;
}
to {
  opacity: 1;
}
`
const Wrapper = styled.div`
  animation-duration: 1s;
  animation-name: ${fadein};
`

const BackButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 12px 16px;
  left: 10px;
  top: 10px;
  z-index: 1;
  background: var(--color-primary-alpha);
  backdrop-filter: blur(6px);
`
const ArrowLeft = styled.img`
  width: 15px;
`

const DetailedView = styled.section`
  h1 {
    margin: 0;
    text-align: center;
  }
  img {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    z-index: -1;
  }
`

const Information = styled.div`
  background: var(--color-primary-alpha);
  padding: 14px 16px;
  border-radius: 16px 16px 0 0;
  position: relative;
  top: 230px;
  z-index: 2;

  dl {
    display: flex;
  }
`
const FavoriteButton = styled(Button)`
  width: 100%;
  padding: 11px 20px;
  background-color: ${props =>
    props.isFavorite ? 'var(--color-favorized)' : 'var(--color-secondary)'};
  color: var(--color-basis);
  margin-bottom: 5px;
`

const QuickGuide = styled.div`
  border-radius: 12px;
  background: var(--color-surface);
  border: 1px dotted var(--color-border-info);
  padding: 8px 10px;
  margin-bottom: 8px;
  dl {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0px 15px;
  }

  div {
    padding: 0.5em;
    border: 1px dotted var(--color-secondary);
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

const Details = styled.div`
  border-radius: 12px;
  background: var(--color-surface);
  border: 1px dotted var(--color-border-info);
  padding: 8px 10px;
`
const NavigateFavoritesButton = styled(Button)`
  width: 100%;
  padding: 11px 20px;
  background-color: var(--color-secondary);
  color: var(--color-basis);
  margin-bottom: 5px;
`
