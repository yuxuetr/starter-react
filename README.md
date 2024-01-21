# React + Tailwind CSS + DaisyUI
## `pnpm` + `vite`初始化项目
1. 使用`pnpm`创建`vite`的`React`+`TypeScript`项目
```shell
pnpm create vite # 根据选项选择React和Typescript
# 或
pnpx create-vite my-react-ts-app --template react-ts
```

## Tailwind CSS
1. 安装`Tailwind CSS`

```shell
pnpm install -D tailwindcss postcss autoprefixer
pnpx tailwindcss init -p
  ```

2. 编辑`tailwind.config.js`

```js hl_lines="3"
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: []
}
```

3. 在`src/index.css`导入`Tailwind CSS`样式

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## DaisyUI
1. 安装`DaisyUI`

```shell
pnpm install daisyui
```

2. 配置`DaisyUI`

```js hl_lines="7"
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')]
}
```

3. 配置自定义主题
[DaisyUI随机生成主题](https://daisyui.com/theme-generator/)

```js hl_lines="7-23"
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        'mytheme': {
          "primary": "#ff00c7",
          "secondary": "#ff2500",
          "accent": "#805c00",
          "neutral": "#141414",
          "base-100": "#deffff",
          "info": "#009de8",
          "success": "#00a87d",
          "warning": "#bb5300",
          "error": "#ea1d37",
        },
      }
    ],
  },
  plugins: [require('daisyui')]
}
```

## 测试初始化项目

1. 测试代码
删除`App.tsx`文件中组件代码，然后新增以下代码

```tsx
function HelloReact() {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-h-screen tw-bg-primary-content">
      <div className="tw-card tw-w-96 tw-bg-primary place-content-center tw-text-primary-content">
        <div className="tw-card-body">
          <h2 className="tw-card-title">React + Tailwind CSS + DaisyUI</h2>
          <p>Initalize a project with React + Tailwind CSS + DaisyUI</p>
          <div className="tw-card-actions tw-justify-end">
            <button className="tw-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
        <HelloReact />
  )
}

export default App
```

2. 运行代码并对比按钮的颜色是否和自定义主题中的颜色相同

```shell
pnpm run dev
```

## 安装配置ESlint
1. 安装相关包

```bash
pnpm add -D eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react  eslint-plugin-react-hooks eslint-plugin-unused-imports
```
2. 配置`eslintrc.js`

```js
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        // airbnb规范
        // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
        'airbnb',
        // 兼容typescript的airbnb规范
        // https://github.com/iamturns/eslint-config-airbnb-typescript
        'airbnb-typescript',
        // react hooks的airbnb规范
        'airbnb/hooks',

        // typescript的eslint插件
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@docusaurus/recommended',
        // 使用prettier格式化代码
        // https://github.com/prettier/eslint-config-prettier#readme
        'prettier',
        // 整合typescript-eslint与prettier
        // https://github.com/prettier/eslint-plugin-prettier
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: ['./tsconfig.eslint.json'],
        // 指定ESLint可以解析JSX语法
        ecmaVersion: '2020',
        sourceType: 'module',
        // React启用jsx
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'import', 'unused-imports'],
    rules: {
        /* ********************************** ES6+ ********************************** */
        'no-console': 0,
        'no-var-requires': 0,
        'no-restricted-syntax': 0,
        'no-continue': 0,
        'no-await-in-loop': 0,
        'no-return-await': 0,
        'no-multi-assign': 0,
        'no-param-reassign': [2, { props: false }],
        'max-classes-per-file': 0,
        'class-methods-use-this': 0,
        'guard-for-in': 0,
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        'no-lonely-if': 0,
        'no-bitwise': ['error', { allow: ['~'] }],

        /* ********************************** Module Import ********************************** */

        'import/prefer-default-export': 0,
        'import/no-cycle': 0,
        'import/no-dynamic-require': 0,
        'import/no-absolute-path': 0,
        'import/extensions': 0,
        'no-restricted-exports': 0,

        // 一部分文件在导入devDependencies的依赖时不报错
        'import/no-extraneous-dependencies': [
            1,
            {
                devDependencies: true,
            },
        ],
        // 模块导入顺序规则
        'import/order': [
            1,
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always-and-inside-groups',
                warnOnUnassignedImports: true,
            },
        ],
        // 自动删除未使用的导入
        // https://github.com/sweepline/eslint-plugin-unused-imports
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 0,
        'unused-imports/no-unused-imports': 1,
        'unused-imports/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],

        /* ********************************** Typescript ********************************** */
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/require-await': 0,
        '@typescript-eslint/no-for-in-array': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-argument': 0,
        '@typescript-eslint/ban-ts-comment': 0,

        /* ********************************** React and Hooks ********************************** */
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-no-useless-fragment': 0,
        'react/display-name': 0,
        'react/button-has-type': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/destructuring-assignment': 0,
        'react/static-property-placement': 0,
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'react/function-component-definition': 0,
        'react-hooks/exhaustive-deps': 0,

        /* ********************************** jax-a11y ********************************** */
        'jsx-a11y/aria-role': 0,
        'jsx-a11y/no-redundant-roles': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
    },

    settings: {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'],
    },
};
```

3. ESlint忽略文件`.eslintignore`

```eslintignore
/dist
/node_modules
/back
/.docs/.obsidian
/.history
**/*.svg
**/*.md
**/*.svg
**/*.ejs
**/*.html
**/*.png
**/*.toml
.docusaurus
.dockerignore
.DS_Store
.eslintignore
docker
.editorconfig
Dockerfile*
.gitignore
.prettierignore
LICENSE
.eslintcache
*.lock
yarn-error.log
```
## 安装配置Prettier

1. 安装

```bash
pnpm add -D prettier
```

2. `.prettierrc.js`配置

```js
/** @format */
module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    proseWrap: 'never',
    endOfLine: 'auto',
    semi: true,
    tabWidth: 4,
    vueIndentScriptAndStyle: true,
    htmlWhitespaceSensitivity: 'strict',
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
        {
            files: 'document.ejs',
            options: {
                parser: 'html',
            },
        },
    ],
};
```

3. 配置`.prettierignore`

```prettierignore
/dist
/node_modules
/back
/.docs/.obsidian
/.history
**/*.svg
**/*.md
**/*.svg
**/*.ejs
**/*.html
**/*.png
**/*.toml
.docusaurus
.dockerignore
.DS_Store
.eslintignore
docker
.editorconfig
Dockerfile*
.gitignore
.prettierignore
LICENSE
.eslintcache
*.lock
yarn-error.log
```




