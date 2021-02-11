![Build Pipeline](https://github.com/strukt-js/strukt-scripts/workflows/Build,%20Lint,%20Test/badge.svg?branch=main)

# strukt-scripts

This package includes scripts and configuration to maintain consistency used by Strukt components.

## Install

```shell
yarn add @strukt-js/strukt-scripts --dev
```
or
```shell
npm install @strukt-js/strukt-scripts --save-dev
```

in package.json add:

```json
{
  "scripts": {
    "lint": "strukt-scripts lint",
    "test": "strukt-scripts test"
  },
  "strukt": {
    "preset": "@strukt-js/strukt-preset"
  }
}
```

## VS Code Integration and others IDE's

#### ESLint
Add at your `project.json`
```json
"eslintConfig": {
    "extends": "@strukt-js/eslint-config-strukt"
},
```

#### Prettier
Add at your `project.json`
```json
"prettier": "@strukt-js/prettier-config-strukt"
```

### Future Work
* StyleLint
* Jest
* LightHouse + ELK
* Cypress
* Pupperters

