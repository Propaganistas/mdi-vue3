const fs = require('fs').promises
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const camelcase = require('camelcase')
const { compile: compileVue } = require('@vue/compiler-dom')

function transform (svg, componentName, format) {
	svg = svg.replace(/.*(<svg .*<\/svg>)$/, "$1")
			 .replace(/ id="mdi-[a-z0-9-]+"/, '')

    let { code } = compileVue(svg, {
      mode: 'module',
    })

    if (format === 'esm') {
      return code.replace('export function', 'export default function')
    }

    return code
      .replace(
        /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/,
        (_match, imports, _quote, mod) => {
          let newImports = imports
            .split(',')
            .map((i) => i.trim().replace(/\s+as\s+/, ': '))
            .join(', ')

          return `const { ${newImports} } = require("${mod}")`
        }
      )
      .replace('export function render', 'module.exports = function render')
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? '.js' : ''
      if (format === 'esm') {
        return `export { default as ${componentName} } from './${componentName}${extension}'`
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`
    })
    .join('\n')
}

async function getIcons() {
  let libDir = './node_modules/@mdi/svg/svg'
  let files = await fs.readdir(libDir)

  return promiseAllInBatches(async (file) => ({
      svg: await fs.readFile(`${libDir}/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`,
    }), files, 200)

  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`${libDir}/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`,
    }))
  )
}

async function buildIcons(format) {
  let outDir = `./dist/${format}`

  await fs.mkdir(outDir, { recursive: true })

  let icons = await getIcons()

  await promiseAllInBatches(async ({ componentName, svg }) => {
      let content = await transform(svg, componentName, format)
      let types = `export default import("vue").DefineComponent;`

      return [
        fs.writeFile(`${outDir}/${componentName}.js`, content, 'utf8'),
        ...(types ? [fs.writeFile(`${outDir}/${componentName}.d.ts`, types, 'utf8')] : []),
      ]
    }, icons, 50
  )

  await fs.writeFile(`${outDir}/index.js`, exportAll(icons, format), 'utf8')

  await fs.writeFile(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false), 'utf8')
}

async function promiseAllInBatches(task, items, batchSize) {
    let position = 0;
    let results = [];
    while (position < items.length) {
        const itemsForBatch = items.slice(position, position + batchSize);
        results = [...results, ...await Promise.all(itemsForBatch.map(item => task(item)))];
        position += batchSize;
    }
    return results;
}

function main() {
  console.log(`Building...`)

  Promise.all([rimraf('./dist/esm/*'), rimraf('./dist/commonjs/*')])
    .then(() =>
      Promise.all([
        buildIcons('esm'),
        buildIcons('commonjs'),
      ])
    )
    .then(() => console.log(`Finished building Vue icon components.`))
}

main()