import styled from 'styled-components/macro'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'

export default function FormPage({ onSubmit }) {
  const history = useHistory()

  return (
    <Wrapper>
      <Top>
        <Header>New Reminder</Header>
        <BackButton onClick={navigateBack}>X</BackButton>
      </Top>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name of Crop
          <Input name="name" />
        </Label>
        <Label>
          Add task
          <Input name="task" placeholder="e.g. water, fertilze" />
        </Label>
        <Label>
          Date
          <Input name="date" type="date" />
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
    const toDos = { nameOfCrop, tasks, date }
    onSubmit(toDos)
    history.push('/tasks')
  }
}

const Wrapper = styled.div`
  display: grid;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const BackButton = styled(Button)`
  padding: 10px 14px;
`

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SaveButton = styled(Button)`
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px;
  background: var(--color-dark-green);
  color: white;
`

const Input = styled.input`
  width: 100%;
  padding: 4px;
  border-radius: 16px;
  overflow: auto;
  font-size: 1em;
  line-height: 1.5em;
  resize: none;
`
