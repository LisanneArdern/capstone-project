import CropDetailsPage from './CropDetailsPage'
export default {
  title: 'CropDetailsPage',
  component: CropDetailsPage,
}

const Template = args => <CropDetailsPage {...args} />

export const Default = Template.bind({})
Default.args = {}
