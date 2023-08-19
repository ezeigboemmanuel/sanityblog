import {defineField, defineType} from 'sanity'

export default defineType({
    name: "comment",
    type: "document",
    title: "Comment",
  fields: [
    defineField({
        name: "name",
        type: "string",
    }),
    defineField({
        title: "Approved",
        name: "approved",
        type: "boolean", 
        description: "Comments won't show on the site until they are approved"
    }),
    defineField({
        name: "email",
        type: "string"
    }),
    defineField({
        name: "comment",
        type: "text"
    }),
    defineField({
        name: "post",
        type: "reference",
        to: [{type: "post"}]
    }),
  ],
})
