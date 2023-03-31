// schemas/pet.js
export default {
  name: 'Blog',
  type: 'document',
  title: 'Blog-1',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what's on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Created At',
      name: 'createdAt',
      type: 'datetime',
    },
  ],
}
