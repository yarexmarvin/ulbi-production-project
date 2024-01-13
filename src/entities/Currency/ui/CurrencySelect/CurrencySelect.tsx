import { CURRENCY } from 'entities/Currency/model/types/currency';
import { memo, useCallback, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
// import cls from './CurrencySelect.module.scss';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
  className?: string
  value?: CURRENCY
  readOnly?: boolean
  onChange?: (value: CURRENCY) => void
}

const options = [
  { value: CURRENCY.RUB, label: CURRENCY.RUB },
  { value: CURRENCY.USD, label: CURRENCY.USD },
  { value: CURRENCY.EUR, label: CURRENCY.EUR }
]

export const CurrencySelect = memo((props: PropsWithChildren<CurrencySelectProps>) => {
  const { className, value, onChange, readOnly } = props;

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CURRENCY)
  }, [onChange])

  return (<Select
    className={classNames({ cls: undefined, mods: {}, additional: [className] })}
    label='Валюта'
    readonly={readOnly}

    value={value}
    onChange={onChangeHandler}
    options={options}
  />);
})
