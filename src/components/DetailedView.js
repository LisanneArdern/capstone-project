import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DetailedView.propTypes = {
  image: PropTypes.node,
  name: PropTypes.string,
  botanicalName: PropTypes.string,
  sun: PropTypes.string,
  spread: PropTypes.number,
  rowSpace: PropTypes.number,
  details: PropTypes.string,
}

export default function DetailedView({
  image,
  name,
  botanicalName,
  sun,
  spread,
  rowSpace,
  details,
}) {
  return (
    <Wrapper>
      <img src={image} alt="" />

      <Information>
        <h2>{name}</h2>
        <dl>
          <dt>Botanical Name:</dt>
          <dd>{botanicalName}</dd>
        </dl>
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

const Information = styled.section`
  background: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  dl {
    display: flex;
  }
`
const QuickGuide = styled.section`
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
