import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders'
import type webpack from 'webpack'
import { buildBabelLoader } from '../build/loaders/buildBabelLoader'
import { buildTSLoader } from '../build/loaders/buildTSLoader'
import { buildSVGLoader } from '../build/loaders/buildSvgLoader'
import { buildFileLoader } from '../build/loaders/buildFileLoader'
import { type RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildCSSLoaders(true), buildBabelLoader(), buildTSLoader(), buildSVGLoader(), buildFileLoader())

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
