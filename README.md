# @taror/components-compat

用 React 组件库替换 Taro 中的 Web Component 组件库 🤟

依赖的 React 组件库为 https://nervjs.github.io/tarojs-plugin-platform-nextjs/

# 安装

```
npm install @taror/components-compat
```

# 使用

修改 Taro 项目中的 babel.config.js

```
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    require.resolve('@taror/components-compat/babel')
  ]
}
```
