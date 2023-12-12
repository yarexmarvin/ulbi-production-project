export const buildTSLoader = () => ({
  test: /\.(tsx|ts)$/,
  use: 'ts-loader',
  exclude: /node_modules/
})
