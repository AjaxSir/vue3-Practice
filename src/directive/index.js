const directives = require.context('./', true, /^((?!index).)*$/) // 非index字符串 /\input|index/
const direcObj = {}
directives.keys().forEach(element => {
    const directivesConfig = directives(element)
    const name = element
        .replace(/^\.\/_/, '')
        .replace(/\.\w+$/, '')
        .split('./')
        .join('')

    direcObj[name] = directivesConfig
});
export default direcObj