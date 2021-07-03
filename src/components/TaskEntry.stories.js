import TaskEntry from './TaskEntry'
export default {
  title: 'TaskEntry',
  component: TaskEntry,
}

const Template = args => <TaskEntry {...args} />

export const Default = Template.bind({})
Default.args = {
  date: '2021-07-12',
  nameOfCrop: 'Pineapple',
  tasks: 'water',
}
