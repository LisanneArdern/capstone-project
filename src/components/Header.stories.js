import Header from './Header'
export default {
  title: 'Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Task',
}

export const LongTitle = Template.bind({})
LongTitle.args = {
  children: 'Very, very, very long Header',
}
