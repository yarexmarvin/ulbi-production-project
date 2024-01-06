declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
// declare module '*.svg' {
//   import type React from 'react'
//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
//   export default SVG
// }

declare module '*.svg' {

  const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
  >

  export default ReactComponent
}

declare const __IS_DEV__: boolean
declare const __API__: string
