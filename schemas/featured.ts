import { defineField, defineType } from "sanity";

export default defineType({
    name:'featured',
    title:'Featured Menu Categories',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Featured Category Name',
            type:'string',
            validation:(Rule:any)=>Rule.required()
        }),
        defineField({
            name:'short_description',
            title:'Short Description',
            type:'string',
            validation:(Rule:any)=>Rule.max(200)
        }),
        defineField({
            name:'restaurants',
            title:'Restaurants Featured',
            type:'array',
            validation:(Rule:any)=>Rule.required(),
            of:[{type:'reference',to:[{type:'restaurants'}]}]
        })
    ]
})