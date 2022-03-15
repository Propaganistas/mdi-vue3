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
const templatesDir = join(rootDir, 'templates')
const iconsDir = join(rootDir, 'icons')

const icons = Object.keys(mdi)
    .filter(name => name.startsWith('mdi'))
    .map(name => {
        return {
            path: mdi[name],
            name: name.replace(/^(mdi)/, '') + 'Icon'
        }
    })

if (existsSync(iconsDir)) {
    rmSync(iconsDir, { recursive: true })
}

mkdirSync(iconsDir)

//
// Generate index.js
//

const indexTemplate = template(readFileSync(join(templatesDir, 'index.js')))
const indexTypesTemplate = template(readFileSync(join(templatesDir, 'index.d.ts')))

writeFile(join(rootDir, `index.js`), indexTemplate({ icons }), () => {
    console.log('Generated index.js')
})

writeFile(join(rootDir, `index.d.ts`), indexTypesTemplate({ icons }), () => {
  console.log('Generated index.d.ts')
})

//
// Generate the individual icon files
//

const iconTemplate = template(readFileSync(join(templatesDir, 'icon.js')))
const iconTypeTemplate = template(readFileSync(join(templatesDir, 'icon.d.ts')))

await PromisePool
    .withConcurrency(20)
    .for(icons)
    .process(async (icon) => {
        await promises.writeFile(
            join(iconsDir, `${icon.name}.js`),
            iconTemplate({ icon })
        )

        await promises.writeFile(
            join(iconsDir, `${icon.name}.d.ts`),
            iconTypeTemplate({ icon })
        )

        console.log(`Generated ${icon.name}.js`)
        console.log(`Generated ${icon.name}.d.ts`)
    })
