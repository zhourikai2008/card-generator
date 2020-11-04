// https://umijs.org/config/
import { IConfig } from 'umi-types';
import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';

// ref: https://umijs.org/config/
const config: IConfig =  {
  // add for transfer to umi
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      title: '卡牌生成器',
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      dll: true,
      locale: {
        enable: true, // default false
        default: 'zh-CN', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  treeShaking: true,
  targets: {
    ie: 11,
  },
  // 路由配置
  routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': '#1890FF',
  },
  proxy: {
    '/api': {
      target: 'http://192.168.30.76:5060/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
};

export default config;
