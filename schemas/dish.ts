import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation:Rule=>Rule.required()
    }),

    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation:Rule=>Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation:Rule=>Rule.required()
    }),
    defineField({
      name:'image',
      type:'image', 
      title:'Image of Dish'
    })
  ],
})
