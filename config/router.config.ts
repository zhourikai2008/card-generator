export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/card/generator'
      },

      {
        path: '/card',
        routes: [
          {
            path: '/card/generator',
            component: './Index'
          },
          {
            path: '/card/result',
            component: './Card/Result'
          }
        ]
      },
    ]
  }
];
