import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders'
import type webpack from 'webpack'
import { buildBabelLoader } from '../build/loaders/buildBabelLoader'
import { buildTSLoader } from '../build/loaders/buildTSLoader'
import { buildSVGLoader } from '../build/loaders/buildSvgLoader'
import { buildFileLoader } from '../build/loaders/buildFileLoader'
import { DefinePlugin, type RuleSetRule } from 'webpack'

function isRule (rule: any): rule is RuleSetRule {
  return (rule as RuleSetRule).test !== undefined;
}

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.module.rules = config.module.rules.map((rule) => {
    if (isRule(rule)) {
      if (/(svg|png|jpe?g|gif|webp)/ig.test(rule.test as string)) {
        return { ...rule, exclude: /\.(svg|png|jpe?g|gif|webp)$/i }
      }
    }

    return rule
  })

  config.module.rules.push(buildCSSLoaders(true), buildBabelLoader(), buildTSLoader(), buildSVGLoader(), buildFileLoader())

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook')
    })
  );

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
