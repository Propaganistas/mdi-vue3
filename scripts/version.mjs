import { readFileSync, writeFile } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const rootDir = fileURLToPath(new URL('../', import.meta.url))
const distDir = join(rootDir, 'dist')

//
// Update version in package.json
//

const mdi_version = JSON.parse(
    readFileSync(rootDir + '/node_modules/@mdi/js/package.json')
).version

const definition = JSON.stringify({
    ...JSON.parse(readFileSync(distDir + '/package.json')),
    version: mdi_version
}, null, 2)

writeFile(distDir + '/package.json', definition, () => { 
    console.log(`Set package version to ${mdi_version}`) 
})
