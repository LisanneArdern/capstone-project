import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DetailedView.propTypes = {
  name: PropTypes.string,
  botanicalName: PropTypes.string,
  sun: PropTypes.string,
  spread: PropTypes.string,
  rowSpace: PropTypes.string,
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
      <h2>{name}</h2>
      <dl>
        <dt>Botanical Name:</dt>
        <dd>{botanicalName}</dd>
      </dl>
      <QuickGuide>
        <h3>Quick Guide</h3>
        <ul>
          <li>{sun}</li>
          <li>
            <dl>
              <dt>Spread</dt>
              <dd>{spread}</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Row Space</dt>
              <dd>{rowSpace}</dd>
            </dl>
          </li>
        </ul>
      </QuickGuide>
      <h3>Details</h3>
      <p>{details}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  dl {
    display: flex;
  }
`
const QuickGuide = styled.section`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
  }

  li {
    border: 1px black solid;
    border-radius: 0.12em;
    padding: 0.5em;
  }

  dl {
    display: grid;
  }
  dt {
    padding: 0;
    font-size: small;
  }

  dd {
    margin: 0;
  }
`
