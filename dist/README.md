# Material Design Icons - Vue3 components

This package exports all icons of [@mdi/js](https://github.com/Templarian/MaterialDesign-JS) as self-contained Vue components.
Package versions equal the version of the contained `@mdi/js` icon set. The package is configured to automatically publish new releases when available to stay on par with `@mdi/js`. No human involved.

| `@mdi/js` | `mdi-vue3` |
|---|---|
| 6.4.95 | 6.4.95 |
| 6.5.95 | 6.5.95 |
| ... | ... |

## Usage

Icon names are transformed into the following format: ~~mdi~~Name**Icon**

| `@mdi/js` | `mdi-vue3` |
|---|---|
| mdiAbacus | AbacusIcon |
| mdiCheck | CheckIcon |
| ... | ... |

Knowing that, you can then import an icon as a Vue component. Please note that both named imports and direct imports are supported:

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
