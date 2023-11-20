type Modes = Record<string, boolean | string>


interface ClassNames {
  cls: string,
  mods?: Modes,
  additional?: string[]
}

export const classNames = ({ cls, mods = {}, additional = [] }: ClassNames): string => [cls, ...additional.filter(Boolean), ...Object.keys(mods).filter(key => mods[key])].join(' ');





