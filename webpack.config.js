const path = require('path')

module.exports = (env) => {
  const isProduction = env === 'production'

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
    	test: /\.(sass|scss|less|css)$/,
    	use: ['style-loader', 'css-loader', 'sass-loader']
      }]
    },
    plugins: [
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
