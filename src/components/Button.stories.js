import Button from './Button'
export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Back',
}

export const Active = Template.bind({})
Active.args = {
  children: 'Back',
  isActive: true,
}
