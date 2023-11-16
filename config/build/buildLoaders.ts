import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {


  const tsLoader = {
    test: /\.(tsx|ts)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const sassLoader = {
    test: /\.(s[ac]ss|css)$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__local' : '[hash:base64:8]'
          },
        }
      },
      "sass-loader",
    ],

  }





  return [
    tsLoader,
    sassLoader,
  ]
}