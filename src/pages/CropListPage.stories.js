
  import CropListPage from './CropListPage'
  export default {
      title: 'CropListPage',
      component: CropListPage
  }
    
  const Template = args => <CropListPage {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
  