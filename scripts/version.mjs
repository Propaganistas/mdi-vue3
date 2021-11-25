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

let pkg = JSON.parse(readFileSync(distDir + '/package.json'))

pkg.version = mdi_version

writeFile(distDir + '/package.json', JSON.stringify(pkg, null, 2), () => { 
    console.log(`Set package version to ${mdi_version}`) 
})
