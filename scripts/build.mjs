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
const distDir = join(rootDir, 'dist')
const outputDir = join(distDir, 'icons')

delete mdi.__esModule

const icons = Object.keys(mdi).map(name => {
    return {
        path: mdi[name],
        name: name.replace(/^(mdi)/, '') + 'Icon'
    }
})


//
// Generate index.js
//

const indexTemplate = template(readFileSync(join(templatesDir, 'index.js')))
const indexTypesTemplate = template(readFileSync(join(templatesDir, 'index.d.ts')))

writeFile(join(distDir, `index.js`), indexTemplate({ icons }), () => {
    console.log('Generated index.js')
})

writeFile(join(distDir, `index.d.ts`), indexTypesTemplate({ icons }), () => {
  console.log('Generated index.d.ts')
})

//
// Generate the individual icon files
//

const iconTemplate = template(readFileSync(join(templatesDir, 'icon.js')))
const iconTypeTemplate = template(readFileSync(join(templatesDir, 'icon.d.ts')))

if (existsSync(outputDir)) {
    rmSync(outputDir, { recursive: true })
}

mkdirSync(outputDir)

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
