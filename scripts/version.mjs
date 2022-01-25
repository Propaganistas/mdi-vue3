import { readFileSync, writeFile } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const rootDir = fileURLToPath(new URL('../', import.meta.url))

//
// Fetch package.json definition(s)
//

const mdi = JSON.parse(readFileSync(join(rootDir, 'node_modules/@mdi/js/package.json')))
let pkg = JSON.parse(readFileSync(join(rootDir, 'package.json')))

//
// Update version in package.json
//

pkg.version = mdi.version

writeFile(join(rootDir, 'package.json'), JSON.stringify(pkg, null, 2), () => { 
    console.log(`Set package version to ${mdi.version}`) 
})
