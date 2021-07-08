![Build Pipeline](https://github.com/strukt-js/strukt-scripts/workflows/Build,%20Lint,%20Test/badge.svg?branch=main)

# strukt-scripts

strukt-scripts is a tool ans simple preset which lets you build javascripts projects with shared presets across your organization.

### Requisites 
 - Node 15+ 
 - Yarn 

<sub> * NPM is not supported </sub>
 
## Install

```shell
yarn add @strukt-js/strukt-scripts --dev
```

in package.json add:

```json
{
  "scripts": {
    "lint": "strukt-scripts lint",
    "test": "strukt-scripts test",
    "storybook": "strukt-scripts storybook",
  },
  "strukt": {
    "preset": "@strukt-js/strukt-preset"
  }
}
```

#### Typescript
Add at your `tsconfig.json`
```json
  "extends": "@orbitpages/typescript-config-strukt"
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

