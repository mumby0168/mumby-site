const path = require('path');

module.exports = [
    {
        mode: "production",
        entry: './src/js/index.js',
        output: {
            filename: 'index.bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    },
    {
        mode: "production",
        entry: "./src/css/index.scss",
        module: {
            rules: [
                {
                    test: /\index.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'index.css',
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                },
            ],
        },
    }
];

