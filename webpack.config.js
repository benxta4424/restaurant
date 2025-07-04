const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "development",
    entry:"./src/main.js",
    output: {
        filename:"mainn.js",
        path: path.resolve(__dirname,"dist"),
        clean:true
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template:"./src/index.html"
            }
        )
    ],
    module: {
        rules:[
            {
                test:/\.css/i,
                use:["style-loader", "css-loader"]
            },

            {
                test:/\.html/i,
                use:["html-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    }

}