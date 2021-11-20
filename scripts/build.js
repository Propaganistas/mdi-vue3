const fs = require('fs').promises
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const camelcase = require('camelcase')
const { compile } = require('@vue/compiler-dom')

function transform(svg, componentName) {
    svg = svg.replace(/.*(<svg .*<\/svg>)$/, "$1")
             .replace(/ id="mdi-[a-z0-9-]+"/, '')

    let { code } = compile(svg, {
        mode: 'module',
    })

    return code.replace('export function', 'export default function')
}

function exportAll(icons, includeExtension = true) {
    return icons.map(({ componentName }) => {
        let extension = includeExtension ? '.js' : ''
        
        return `export { default as ${componentName} } from './${componentName}${extension}'`
    }).join('\n')
}

async function getIcons() {
    let libDir = './node_modules/@mdi/svg/svg'
    let files = await fs.readdir(libDir)

    return Promise.all(
        files.map(async (file) => ({
            svg: await fs.readFile(`${libDir}/${file}`, 'utf8'),
            componentName: `${camelcase(file.replace(/\.svg$/, ''), { pascalCase: true })}Icon`,
        }))
    )
}

async function buildIcons() {
    let outDir = `./dist`
    
    await fs.mkdir(outDir, { recursive: true })
    
    let icons = await getIcons()
    
    await Promise.all(
        icons.flatMap(async ({ componentName, svg }) => {
            let content = await transform(svg, componentName)
            let types = `export default import("vue").DefineComponent;`
            
            return [
                fs.writeFile(`${outDir}/${componentName}.js`, content, 'utf8'),
                ...(types ? [fs.writeFile(`${outDir}/${componentName}.d.ts`, types, 'utf8')] : []),
            ]
        })
    )
    
    await fs.writeFile(`${outDir}/index.js`, exportAll(icons), 'utf8')
    await fs.writeFile(`${outDir}/index.d.ts`, exportAll(icons, false), 'utf8')
}

Promise.all([ rimraf('./dist/*') ])
    .then(async () => await buildIcons())
