
  import DetailedView from './DetailedView'
  export default {
      title: 'DetailedView',
      component: DetailedView
  }
    
  const Template = args => <DetailedView {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
  