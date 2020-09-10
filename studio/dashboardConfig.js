export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5a9d7d35d3ed19e77a9040',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1fcc5395',
                  apiId: '3ff96d8d-0733-435a-b03b-a9ac182f8899'
                },
                {
                  buildHookId: '5f5a9d7d994770178f704e9e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pm1fmjvw',
                  apiId: 'f159a7c7-6a3f-4e94-83eb-164b9e7680c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pmr1027/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pm1fmjvw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
