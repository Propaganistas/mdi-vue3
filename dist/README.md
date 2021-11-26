# Material Design Icons - Tree-shakeable Vue3 components

This package exports all icons of [@mdi/js](https://github.com/Templarian/MaterialDesign-JS) as self-contained, **tree-shakeable** Vue components.
Package versions equal the version of the contained `@mdi/js` icon set. The package is configured to automatically publish new releases when available to stay on par with `@mdi/js`. No human involved.

| `@mdi/js` | `mdi-vue3` |
|---|---|
| 6.4.95 | 6.4.95 |
| 6.5.95 | 6.5.95 |
| ... | ... |

## Installation

```
npm install mdi-vue3
```

```
yarn add mdi-vue3
```

Note: There's **no** need to install `@mdi/js` by yourself.

## Usage

Icon names are transformed into the following format: ~~mdi~~Name**Icon**

| `@mdi/js` | `mdi-vue3` |
|---|---|
| mdiAbacus | AbacusIcon |
| mdiCheck | CheckIcon |
| ... | ... |

Knowing that, you can then import an icon as a Vue component. As long as you make use of ES6 imports **tree-shaking is supported**.
Please note that both named imports and direct imports can be used:

```html
<template>
  <AbacusIcon />
  <CheckIcon />
</template>

<script>
  import { AbacusIcon } from 'mdi-vue3'      // Named import
  import CheckIcon from 'mdi-vue3/CheckIcon' // Direct import
  
  export default {
    components: { AbacusIcon, CheckIcon },
  }
</script>
```

Every icon is rendered into the following:

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="..." />
</svg>
```

The SVG's attributes are deliberately kept clean. This means that you'll most likely want to assign an explicit width and/or height to the icon.
