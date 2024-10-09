const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/app.js', // Archivo de entrada principal
  output: {
    filename: 'bundle.js', // Archivo de salida JS
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Archivos CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Usa MiniCssExtractPlugin para extraer el CSS
      },
    ],
  },
  optimization: {
    minimize: true, // Habilitar minificación
    minimizer: [new TerserPlugin()], // Minificador de JavaScript
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // Nombre del archivo CSS de salida
    }),
  ],
  mode: 'production', // Establecer en modo producción
};
