import DetailedView from './DetailedView'
import image from './test-image.jpg'

export default {
  title: 'DetailedView',
  component: DetailedView,
}

const Template = args => <DetailedView {...args} />

export const Default = Template.bind({})
Default.args = {
  image: image,
  name: 'Potato',
  botanicalName: 'Solanum tuberosum',
  sun: 'Full sun',
  spread: '30 cm',
  rowSpace: '90 cm',
  details:
    'Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family, which also includes tomatoes, eggplants, and peppers. They originated in South America, and spread to become a worldwide staple. The leaves and fruit are usually poisonous and the stem tuber is the only edible part once it is cooked. The potato can be cooked in many ways, brewed into alcohol, and also used as the basis for creating bioplastics. More growing information is available in individual species entries. ',
}
