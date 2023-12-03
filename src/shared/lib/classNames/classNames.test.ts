import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  const mainClass: string = 'testClass1'
  const additional: string[] = ['additionalClass1', 'additionalClass2']
  const mods: Record<string, boolean> = { hovered: true, selected: false }

  it('should return testClass1', () => {
    const result = classNames({ cls: mainClass })

    expect(result).toStrictEqual(mainClass)
  })

  it('should return testClass1 additionalClass1 additionalClass2', () => {
    const result = classNames({ cls: mainClass, additional })

    expect(result).toStrictEqual([mainClass, ...additional].join(' '))
  })
  it('should return testClass1 additionalClass1 additionalClass2 hovered', () => {
    const result = classNames({ cls: mainClass, additional, mods })

    expect(result).toStrictEqual([mainClass, ...additional, Object.keys(mods)[0]].join(' '))
  })
})
