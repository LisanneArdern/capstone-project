import styled from 'styled-components/macro'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

export default function FormPage({ onSubmit }) {
  const history = useHistory()

  return (
    <div>
      <Button onClick={navigateBack}>X</Button>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name of Crop:
          <input name="name" />
        </Label>
        <Label>
          Add new task
          <input name="task" />
        </Label>
        <Button>save</Button>
      </Form>
    </div>
  )
  function navigateBack() {
    history.push('/tasks')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameOfCrop = form.elements.name.value
    const tasks = form.elements.task.value
    const toDos = { nameOfCrop, tasks }
    onSubmit(toDos)
    history.push('/tasks')
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.1em;
  gap: 4px;
`

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 4px;
//   border-radius: 16px;
//   overflow: auto;
//   font-size: 1em;
//   line-height: 1.5em;
//   resize: none;
// `
