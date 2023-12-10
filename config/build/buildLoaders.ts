import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCSSLoaders } from './loaders/buildCSSLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildTSLoader } from './loaders/buildTSLoader'

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    // babelLoader до tsLoader
    buildBabelLoader(),
    buildTSLoader(),
    buildCSSLoaders(isDev),
    svgLoader,
    fileLoader
  ]
}
