import styled from 'styled-components/macro'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import { v4 as uuidv4 } from 'uuid'
import Background from '../images/vegetables.png'

export default function FormPage({ onSubmit, favoriteCrops }) {
  const history = useHistory()

  return (
    <Wrapper>
      <Top>
        <Header>New Reminder</Header>
        <BackButton onClick={navigateBack}>X</BackButton>
      </Top>
      <Form onSubmit={handleSubmit}>
        <Label>
          Choose a crop from your Garden
          <Select name="name">
            {favoriteCrops.map(({ id, attributes }) => (
              <option key={id}>{attributes.name}</option>
            ))}
          </Select>
        </Label>
        <Label>
          Date
          <Input name="date" type="date" />
        </Label>
        <Label>
          Add task
          <Input
            name="task"
            placeholder="e.g. water, fertilize"
            autoComplete="off"
          />
        </Label>

        <SaveButton>save</SaveButton>
      </Form>
    </Wrapper>
  )
  function navigateBack() {
    history.push('/tasks')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameOfCrop = form.elements.name.value
    const tasks = form.elements.task.value
    const date = form.elements.date.value

    const toDos = { id: uuidv4(), nameOfCrop, tasks, date }
    onSubmit(toDos)
    history.push('/tasks')
  }
}

const Wrapper = styled.section`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: min-content auto;
  height: 100vh;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid var(--color-secondary);
  background-color: var(--color-primary-alpha);
`
const BackButton = styled(Button)`
  padding: 10px 14px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 15px;
  background-color: var(--color-primary-alpha);
`
const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  overflow: auto;
  line-height: 20px;
  resize: none;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1.5px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  overflow: auto;
  line-height: 20px;
  resize: none;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1.5px;
`

const SaveButton = styled(Button)`
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px;
  background: var(--color-secondary);
  color: white;
`
