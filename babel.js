module.exports = function (babel) {
    const t = babel.types
    
    return {
        name: 'taror-components-import-plugin',
        visitor: {
            ImportDeclaration(path) {
                if (process.env.TARO_ENV !== 'h5') {
                    return;
                }

                const source = path.get('source')
                if (!source.isStringLiteral()) {
                    return;
                }
                if (source.node.value === '@tarojs/components') {
                    source.replaceWith(
                        t.stringLiteral('@taror/components-compat')
                    )
                }
                if (source.node.value === '@tarojs/components/dist/taro-components/taro-components.css') {
                    source.replaceWith(
                        t.stringLiteral('@taror/components-compat/taror.css')
                    )
                }
            }
        }
    }
}
