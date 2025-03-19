import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'yhumi/blog'
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: 'Title' },
          slug: {
            generate: (name) => {
              return name;
            }
          }
         }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', validation: { isRequired: true } }),
        image: fields.image({ label: 'Cover Image' }),
        info: fields.array(
          fields.object({
            text: fields.text({ label: 'Text', validation: { isRequired: true } }),
            icon: fields.object({
              type: fields.select({ 
                  label: 'Type', 
                  options: [
                    {
                      label: 'Lucide',
                      value: 'lucide'
                    }
                  ], 
                  defaultValue: 'lucide' }),
              name: fields.text({ label: 'Name' })
            }),
            link: fields.url({ label: 'Link' })
          })
        ),

        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
});