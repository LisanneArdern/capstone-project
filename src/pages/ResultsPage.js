import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import CropItem from '../components/CropItem'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import useFetch from '../hooks/useFetch.js'

ResultsPage.propTypes = {
  onBack: PropTypes.func.isRequired,
  onDetails: PropTypes.func.isRequired,
}

export default function ResultsPage({ onBack, onDetails }) {
  const { searchTerm } = useParams()
  const { data, isQuerying } = useFetch(searchTerm)
  if (isQuerying)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )
  return (
    <div>
      <Header>Search for '{searchTerm}'</Header>
      <BackButton onClick={onBack}>&lt; back</BackButton>
      <Output>
        {data.length !== 0 ? (
          <>
            {data
              ?.filter(crop =>
                crop.attributes.main_image_path.match(/(https)/gi)
              )
              .map(({ id, attributes }) => (
                <CropItem
                  key={id}
                  name={attributes.name}
                  image={attributes.main_image_path}
                  onClick={() => onDetails(id)}
                />
              ))}
          </>
        ) : (
          <Paragraph>
            No crop found.
            <br />
            Please try again and type at least 3 letters.
          </Paragraph>
        )}
      </Output>
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
  padding: 8px 12px;
  left: 10px;
  top: 10px;
`
const Output = styled.div`
  overflow-y: auto;
`
const Paragraph = styled.p`
  text-align: center;
  margin: 50px 0;
`
