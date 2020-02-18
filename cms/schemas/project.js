export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
    },
    {
      title: 'Highlights',
      name: 'highlights',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ],
};
