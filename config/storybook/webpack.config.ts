import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders'
import type webpack from 'webpack'
import { buildBabelLoader } from '../build/loaders/buildBabelLoader'
import { buildTSLoader } from '../build/loaders/buildTSLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.module.rules.push(buildCSSLoaders(true), buildBabelLoader(), buildTSLoader())

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
