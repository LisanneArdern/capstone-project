import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

DetailedView.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  botanicalName: PropTypes.string.isRequired,
  sun: PropTypes.string.isRequired,
  spread: PropTypes.number.isRequired,
  rowSpace: PropTypes.number.isRequired,
  details: PropTypes.string.isRequired,
}

export default function DetailedView({ crop, onToggleFavorite, isFavorite }) {
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
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.section`
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
    border: 1px solid black;
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
