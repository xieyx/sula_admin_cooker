// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  manifest: {
    basePath: '/',
  },
  history: {
    type: 'browser',
  },
  base: '/',
  publicPath: '/',
});
