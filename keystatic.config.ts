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
        title: fields.slug({ 
          name: { label: 'Title', validation: { isRequired: true } },
          slug: {
            generate: (name) => {
              var curDate = new Date();
              var month = curDate.getMonth() + 1;
              return `${curDate.getFullYear()}/${month.toString().padStart(2, '0')}/${name.toLowerCase().replace(' ', '-')}`;
            },
            validation: {
              pattern: {
                regex: /\d{4}\/\d{2}\/[^\/\s]+/g,
                message: 'Slugs must be in the format: yyyy/mm/post-title.'
              }
            }
          },
        }),
        description: fields.text({ label: 'Description', validation: { isRequired: true } }),
        image: fields.image({ 
          label: 'Cover Image', 
          directory: 'src/content/assets/posts',
          publicPath: '../../../assets/posts',
          validation: { isRequired: true } 
        }),
        createdAt: fields.date({ label: 'Created', validation: { isRequired: true } }),
        updatedAt: fields.date({ label: 'Updated' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        tags: fields.array(
          fields.text({
            label: 'Tag'
          }),
          {
            validation: {
              length: { min: 1 }
            }
          }
        ),

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
          name: { label: 'Title', validation: { isRequired: true } },
          slug: {
            generate: (name) => {
              var curDate = new Date();
              var month = curDate.getMonth() + 1;
              return `${curDate.getFullYear()}/${month.toString().padStart(2, '0')}/${name.toLowerCase().replace(' ', '-')}`;
            },
            validation: {
              pattern: {
                regex: /\d{4}\/\d{2}\/[^\/\s]+/g,
                message: 'Slugs must be in the format: yyyy/mm/post-title.'
              }
            }
          }
         }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', validation: { isRequired: true } }),
        image: fields.image({ 
          label: 'Cover Image', 
          directory: 'src/content/assets/projects',
          publicPath: '../../../assets/projects',
          validation: { isRequired: true } 
        }),
        info: fields.array(
          fields.object({
            text: fields.text({ label: 'Text', validation: { isRequired: true } }),
            icon: fields.object({
              type: fields.select({ 
                  label: 'Type', 
                  options: [
                    {
                      label: 'Lucide',
                      value: 'lucide',
                    }
                  ], 
                  defaultValue: 'lucide' }),
              name: fields.text({ label: 'Name', validation: { isRequired: true } })
            }),
            link: fields.url({ label: 'Link' })
          }),
          {
            validation: {
              length: { min: 1 }
            }
          }
        ),

        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
});