import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurants',
  title: 'Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation:(Rule:any)=>Rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
      
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
     
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
     
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
      validation:(Rule:any)=>Rule.required().min(1).max(5).error('Enter a valid rating')
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to:[{type:'category'}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      validation:(Rule)=>Rule.required(),
      of:[{type:'reference', to:[{type:'dish'}]}],  
    }),
  ]

})