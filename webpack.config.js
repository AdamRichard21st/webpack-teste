// biblioteca para fazer resoluções de paths 
const path = require('path');


// configuração do webpack
// para uma lista de todas propriedades
// disponíveis, acesse este link:
// https://webpack.js.org/configuration/
module.exports = {

    // arquivo para importar
    entry: path.resolve(__dirname, 'src/index.js'),

    // configurações do arquivo de saída
    output: {

        // pasta de saída
        path: path.resolve(__dirname, 'dist'),

        // nome do arquivo
        filename: 'jsform-validator.js',

        // configurações da biblioteca
        library: 'Validator',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },

    // define o modo que o arquivo deve ser empacotado
    mode: 'development',
};