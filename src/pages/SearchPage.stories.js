import SearchPage from './SearchPage'

export default {
  title: 'SearchPage',
  component: SearchPage,
}

const Template = args => <SearchPage {...args} />

export const Default = Template.bind({})
Default.args = {
  crops: [
    {
      type: 'crops',
      id: '551dbfed3938340003160000',
      attributes: {
        name: 'Apple',
        slug: 'apple',
        binomial_name: 'Malus pumila',
        common_names: null,
        description:
          "The apple is a deciduous tree in the Rose family grown for it's sweet fruit. The apple originated in Central Asia and has spread across the world. There are now over 7,500 cultivars bred for a variety of climates and characteristics. Apples are propagated through grafting because seeds do not breed true.",
        sun_requirements: 'Full Sun',
        sowing_method: 'Bare root tree',
        spread: 500,
        row_spacing: 500,
        height: 300,
        processing_pictures: 0,
        guides_count: 1,
        main_image_path:
          'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975',
        taxon: 'Species',
      },
    },
    {
      type: 'crops',
      id: '542e99216331360002620300',
      attributes: {
        name: 'Avocado',
        slug: 'avocado',
        binomial_name: 'Persea americana',
        common_names: ['avocado', 'avo', 'alligator pear'],
        description:
          'The avocado is a tree native to South Central America that produces large edible berries with rippled green to black skin that are egg or pear-shaped. There are three main groups of avocado: Mexican, Guatemalan, and West Indian, with Mexican avocados being the most cold-tolerant. Avocados are a subtropical species and need a frost-free climate with little wind. They will not produce fruit outside of tropical climates, but they can be grown as evergreen ornamentals. Avocados grown from seed rarely produce fruit because they are only partially self-pollinating. For a fruiting tree, plant a grafted sapling in a subtropical climate.',
        sun_requirements: 'Full Sun',
        sowing_method: 'Grafted sapling',
        spread: 600,
        row_spacing: 600,
        height: 2000,
        processing_pictures: 0,
        guides_count: 0,
        main_image_path:
          'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b7393fe8d7500030002ea.jpg?1466659729',
        taxon: 'Species',
      },
    },
  ],
}
