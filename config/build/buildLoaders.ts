import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCSSLoaders } from './loaders/buildCSSLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildTSLoader } from './loaders/buildTSLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildSVGLoader } from './loaders/buildSvgLoader'

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  return [
    // babelLoader до tsLoader
    buildBabelLoader(),
    buildTSLoader(),
    buildCSSLoaders(isDev),
    buildSVGLoader(),
    buildFileLoader()
  ]
}
