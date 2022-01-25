import { readFileSync, writeFile } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const rootDir = fileURLToPath(new URL('../', import.meta.url))

//
// Update version in package.json
//

const mdi = JSON.parse(readFileSync(rootDir + '/node_modules/@mdi/js/package.json'))
let pkg = JSON.parse(readFileSync(rootDir + '/package.json'))

pkg.version = mdi.version

writeFile(rootDir + '/package.json', JSON.stringify(pkg, null, 2), () => { 
    console.log(`Set package version to ${mdi.version}`) 
})
