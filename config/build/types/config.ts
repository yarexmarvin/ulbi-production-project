
export type BuildType = 'production' | 'development'

export interface BuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string
}

export interface BuildOptions {
  mode: BuildType,
  paths: BuildPaths,
  isDev: boolean,
  port: number
}

export interface BuildEnv {
  port: number,
  mode: BuildType,

}