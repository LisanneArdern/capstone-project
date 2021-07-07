import React from 'react'
import FormPage from './FormPage'

export default {
  title: 'FormPage',
  component: FormPage,
}

export const Default = args => <FormPage {...args} />
Default.args = {
  favoriteCrops: [
    { id: 1, attributes: { name: 'Potato' } },
    { id: 2, attributes: { name: 'Banana' } },
  ],
}
