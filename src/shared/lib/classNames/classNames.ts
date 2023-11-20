type Modes = Record<string, boolean | string>


interface ClassNames {
  cls: string,
  mods?: Modes,
  additional?: string[]
}

export const classNames = ({ cls, mods = {}, additional = [] }: ClassNames): string => [cls, ...additional, ...Object.keys(mods).filter(key => mods[key])].join(' ');



