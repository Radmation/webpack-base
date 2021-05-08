const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: [
    './src/js/app.js',
    './src/scss/app.scss',
  ],
  output: {
    filename: devMode ? "js/[name].js" : "js/[name].min.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              ident: "postcss",
              plugins: devMode
                ? () => []
                : () => [
                  postcssPresetEnv({
                    browsers: [">1%"]
                  }),
                  require("cssnano")()
                ]
            }
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/fontawesome',
              publicPath: '../fonts/fontawesome/',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "css/[name].css" : "css/[name].min.css"
    })
  ]
};