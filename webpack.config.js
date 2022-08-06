const path = require('path') //path package
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './public/main.js',
    output: {
        path: path.resolve(__dirname,'dist') ,//this resolve fn accepts list of paths to append together
        filename : 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.') //it will search for cargo.toml file
        })
    ],
    experiments: {
        asyncWebAssembly: true
    }
}