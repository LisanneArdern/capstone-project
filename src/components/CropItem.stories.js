import CropItem from './CropItem'
import image from '../test-image.jpg'

export default {
  title: 'CropItem',
  component: CropItem,
}

const Template = args => <CropItem {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Test1',
  image: image,
}
