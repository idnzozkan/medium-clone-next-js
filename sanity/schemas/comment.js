export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'email',
      type: 'string'
    },
    {
      name: 'comment',
      type: 'string'
    },
    {
      name: 'approved',
      type: 'boolean',
      description: 'Until approved, the comment will not be visible to the users.'
    },
    {
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }]
    }
  ]
}
