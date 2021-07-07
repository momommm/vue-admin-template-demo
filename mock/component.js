
module.exports = [
  {
    url: '/vue-admin-template/component/list\.*',
    type: 'post',
    response: config => {
      const { role } = config.body
      let data = {}
      if (role === 'admin') {
        data = {
          code: 20000,
          data: {
            role_name: 'ops',
            component_list: [
              {
                path: '/',
                component: 'Layout',
                redirect: '/dashboard',
                children: [
                  {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: 'Dashboard',
                    meta: { title: 'Dashboard', icon: 'dashboard' }
                  }
                ]
              },
              {
                path: '/example',
                component: 'Layout',
                redirect: '/example/table',
                name: 'Example',
                meta: { title: 'Example', icon: 'el-icon-s-help' },
                children: [
                  {
                    path: 'table',
                    name: 'Table',
                    component: 'Table',
                    meta: { title: 'Table', icon: 'table' }
                  },
                  {
                    path: 'tree',
                    name: 'Tree',
                    component: 'Tree',
                    meta: { title: 'Tree', icon: 'tree' }
                  }
                ]
              }
            ]
          }
        }
      }
      return data
    }
  }
]
