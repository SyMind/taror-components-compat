# @taror/components-compat

用 React 组件库替换 Taro 中的 Web Component 组件库 🤟

依赖的 React 组件库为 https://nervjs.github.io/tarojs-plugin-platform-nextjs/

> 请 Star 🌟 这个项目来表达你的喜爱 ❤️ 和支持。

# 动机

1. 为跨 React 和 Vue 等框架，Taro3 的 H5 端组件库基于 Web Components 使用 Stencil 框架开发。在移动端 Web Components 会存在一些问题：
    1. 安卓 4.4 白屏
    2. 多行文字截断失效
    3. 部分安卓机（OPPO、VIVO 居多），样式 visibility 切换失败导致页面白屏
2. Taro 提供的 [React 兼容性组件库](https://github.com/NervJS/taro/tree/next/packages/taro-components-react/src/components) 仅支持很少的一部分组件，本组件库将支持所有组件。

# 安装

```
npm install @taror/components-compat
```

# 使用

在 Taro 项目的 babel.config.js 中引入插件

```diff
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
+ plugins: [
+    require.resolve('@taror/components-compat/babel')
+ ]
}
```

# 组件支持情况

## 视图容器

- [ ] Block
- [ ] CoverImage
- [ ] CoverView
- [ ] MatchMedia
- [ ] MovableArea
- [ ] MovableView
- [ ] PageContainer
- [ ] RootPortal
- [x] ScrollView
- [ ] ShareElement
- [x] Swiper
- [x] SwiperItem
- [x] View

## 基础内容

- [x] Icon
- [x] Progress
- [x] RichText
- [x] Text

## 表单组件

- [x] Button
- [x] Checkbox
- [ ] CheckboxGroup
- [ ] Editor
- [x] Form
- [x] Input
- [ ] KeyboardAccessory
- [x] Label
- [x] Picker
- [x] PickerView
- [x] PickerViewColumn
- [x] Radio
- [x] RadioGroup
- [ ] Slider
- [x] Switch
- [x] Textarea

## 导航

- [ ] FunctionalPageNavigator
- [x] Navigator
- [ ] NavigationBar

## 媒体组件

- [x] Audio
- [ ] Camera
- [x] Image
- [ ] LivePlayer
- [ ] LivePusher
- [x] Video
- [ ] VoipRoom

## 地图

- [ ] Map

## 画布

- [x] Canvas

## 开放能力

- [ ] Ad
- [ ] AdCustom
- [ ] OfficialAccount
- [ ] OpenData
- [x] WebView

## 配置节点

- [ ] PageMeta
- [ ] CustomWrapper
- [ ] Slot

