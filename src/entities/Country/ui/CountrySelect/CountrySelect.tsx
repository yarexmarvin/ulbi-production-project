import { COUNTRY } from 'entities/Country/model/types/country';
import { memo, useCallback, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
// import cls from './CountrySelect.module.scss';
import { Select } from 'shared/ui/Select';

interface CountrySelectProps {
  className?: string
  value?: COUNTRY
  readOnly?: boolean
  onChange?: (value: COUNTRY) => void
}

const options = [
  { value: COUNTRY.Russia, label: COUNTRY.Russia },
  { value: COUNTRY.USA, label: COUNTRY.USA },
  { value: COUNTRY.Italy, label: COUNTRY.Italy }
];

export const CountrySelect = memo(
  (props: PropsWithChildren<CountrySelectProps>) => {
    const { className, value, onChange, readOnly } = props;

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as COUNTRY);
      },
      [onChange]
    );

    return (
      <Select
        className={classNames({
          cls: undefined,
          mods: {},
          additional: [className]
        })}
        label="Страна"
        readonly={readOnly}
        value={value}
        onChange={onChangeHandler}
        options={options}
      />
    );
  }
);
