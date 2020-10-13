const directives = require.context('./', true, /\.js/)
const direcObj = {}
directives.keys().forEach(element => {
    const directivesConfig = directives(element)
    const name = element
        .replace(/^\.\/_/, '')
        .replace(/\.\w+$/, '')
        .split('./')
        .join('')
    if (name !== 'index') {
        direcObj[name] = directivesConfig
    }
});
export default direcObj