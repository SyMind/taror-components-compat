const fs = require('fs')
const path = require('path')

const dest = path.resolve(__dirname, '..')

for (const file of ['taror.css', 'taror.css.map']) {
    const source = require.resolve(`@taror/components/dist/${file}`)
    fs.copyFileSync(source, path.join(dest, file))
}
