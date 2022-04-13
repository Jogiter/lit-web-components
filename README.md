# `fast-data-sdk`

> build web-components suit for both vue and react.

## background

build web-component which could work both for react and vue

[caniuse#Custom Elements](https://caniuse.com/?search=Custom%20Elements)

- [lit](https://github.com/lit/lit) Lit is a simple library for building fast, lightweight web components.
  - [Browser Support](https://lit.dev/docs/tools/requirements/#content)
- [@webcomponents/webcomponentsjs](https://www.npmjs.com/package/@webcomponents/webcomponentsjs) polyfills supporting the Web Components
  - [Browser Support](https://www.npmjs.com/package/@webcomponents/webcomponentsjs#user-content-browser-support)
- [vue#web-components](https://staging-cn.vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue)

- [use web-component in react](https://stackblitz.com/edit/react-y7vib3?file=src%2Falert.js)
- [use web-component in vue](https://dval.dev/blog/lit-web-components-tutorial/)

:heavy_check_mark: works for both create-react-app && nuxtjs

## Usage

```sh
import { SimpleGreeting } from 'lit-web-components';
```

### inject style into js

>see [vite#1579](https://github.com/vitejs/vite/issues/1579)

import css with js just like `import { Button } from 'element-ui`. plugin check [https://github.com/ElementUI/babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)

Converts

```js
import { Button } from 'components'
```

to

```js
var button = require('components/lib/button')
require('components/lib/button/style.css')
```

## dependencies

- [vite](https://github.com/vitejs/vite)
- [lit](https://github.com/lit/lit/)
- [pnpm](https://pnpm.io/)

## todos

- [x] 使用文档，create-react-app & nuxtjs
- [ ] 单元测试
  - [ ] choose jest or vitest
- [ ] 集成测试
  - [ ] playwright or cypress
- [x] vite `lit/decorators.js` optimizeDeps: `optimizeDeps: { exclude: ['lit'], }`
