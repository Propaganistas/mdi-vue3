import { PromisePool } from '@supercharge/promise-pool'
import { readFileSync, promises, existsSync, rmSync, mkdirSync, writeFile } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { template } from 'lodash-es'
import mdi from '@mdi/js'

//
// Preparations
//

const rootDir = fileURLToPath(new URL('../', import.meta.url))
const distDir = join(rootDir, 'dist')
const outputDir = join(distDir, 'icons')

delete mdi.__esModule

const icons = Object.keys(mdi).map(name => {
    return {
        mdi: name,
        name: name.replace(/^(mdi)/, '') + 'Icon'
    }
})


//
// Generate index.js
//

const indexTemplate = template(
  `<% icons.forEach((icon) => { %>export { default as <%- icon.name %> } from './icons/<%- icon.name %>';
<% } ) %>`
)

const indexTypesTemplate = template(
  `interface Component {
  name: string
  render: Function
}
<% icons.forEach((icon) => { %>export const <%- icon.name %>: Component\n<% } ) %>`
)

if (existsSync(outputDir)) {
    rmSync(outputDir, { recursive: true })
}

mkdirSync(outputDir)

writeFile(join(distDir, `index.js`), indexTemplate({ icons }), () => {
    console.log('Generated index.js')
})

writeFile(join(distDir, `index.d.ts`), indexTypesTemplate({ icons }), () => {
  console.log('Generated index.d.ts')
})

//
// Generate the individual icon files
//

const iconTemplate = template(
  `import convertToSvgComponent from './../utils/convertToSvgComponent'
import { <%= icon.mdi %> } from '@mdi/js'
export default convertToSvgComponent(<%= JSON.stringify(icon.name) %>, <%= icon.mdi %>)
`
)

const iconTypeTemplate = template(
  `import { Component } from './../index'
declare const i: Component
export default i
`
)

await PromisePool
    .withConcurrency(20)
    .for(icons)
    .process(async (icon) => {
        await promises.writeFile(
            join(outputDir, `${icon.name}.js`),
            iconTemplate({ icon })
        )

        await promises.writeFile(
            join(outputDir, `${icon.name}.d.ts`),
            iconTypeTemplate({ icon })
        )

        console.log(`Generated ${icon.name}.js`)
        console.log(`Generated ${icon.name}.d.ts`)
    })
