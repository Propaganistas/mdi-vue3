const fs = require('fs')

fs.writeFileSync(__dirname + '/../package.json', JSON.stringify({
	...require(__dirname + '/../package.json'),
	version: require(__dirname + '/../node_modules/@mdi/svg/package.json').version
}, null, 2))
