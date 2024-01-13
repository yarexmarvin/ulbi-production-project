import { useMemo, type PropsWithChildren, memo } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './Select.module.scss';

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: PropsWithChildren<SelectProps>) => {
  const { className, label, value, options, onChange, readonly } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  const optionsList = useMemo(() => {
    return options?.map((opt, index) => <option
      className={cls.option}
      value={opt.value}
      key={index}>
      {opt.label}
    </option>
    )
  }, [options])

  return (
    <div className={classNames({ cls: cls.SelectWrapper, mods: { [cls.readOnly]: readonly }, additional: [className] })}>
      {label && <span className={cls.label}>{label + '> '}</span>}

      <select
        disabled={readonly}
        onChange={handleOnChange}
        value={value}
        className={cls.select}
      >
        {optionsList}
      </select>
    </div>
  );
})
