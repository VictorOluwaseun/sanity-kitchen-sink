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
                  buildHookId: '60127c4cdd01fa9ee6bfb3ec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ywthqmco',
                  apiId: 'ba077e0c-b6ae-4a06-bd2f-a987c619bbab'
                },
                {
                  buildHookId: '60127c4cbe125fcf1f48957f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9xe3rbwp',
                  apiId: 'b6abbedb-7739-49cf-a112-b7d80f825948'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VictorOluwaseun/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9xe3rbwp.netlify.app', category: 'apps'}
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
