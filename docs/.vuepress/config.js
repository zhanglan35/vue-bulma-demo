module.exports = {
  title: 'Vue bulma demo',
  description: '基于 Bulma.css 封装的一些 Vue Component',
  base: '/vue-bulma-demo-doc/',
  dest: '../dist',
  markdown: {
    config: md => {
      require('./markdown/vueCodeDemoBuilder')(md)
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/layout/columns' },
    ],
    sidebar: [
      {
        title: 'Layout',
        collapsable: false,
        children: [
          '/components/layout/container',
          '/components/layout/columns',
        ]
      },
      {
        title: 'Element',
        collapsable: false,
        children: [
          '/components/element/icon',
          '/components/element/button',
          '/components/element/box',
          '/components/element/tag',
          '/components/element/title',
          '/components/element/image',
        ]
      },
      {
        title: 'Form',
        collapsable: false,
        children: [
          '/components/form/form',
          '/components/form/input',
          '/components/form/checkbox',
          '/components/form/radio',
          '/components/form/textarea',
          '/components/form/select',
          '/components/form/file',
          '/components/form/multi-select',
          '/components/form/radio-table',
        ]
      },
      {
        title: 'Component',
        collapsable: false,
        children: [
          '/components/components/progress',
          '/components/components/notification',
          '/components/components/message',
          '/components/components/breadcrumb',
          '/components/components/card',
          '/components/components/dropdown',
          '/components/components/menu',
          '/components/components/modal',
          '/components/components/navbar',
          '/components/components/pagination',
          '/components/components/panel',
          '/components/components/tabs',
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
