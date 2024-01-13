import { memo, type InputHTMLAttributes, useState, useRef, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: string
  placeholder?: string
  autoFocus?: boolean
  onChange?: (value?: string) => void
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const { className, onChange, value, type = 'text', placeholder, autoFocus = false, readonly, ...otherProps } = props;

  const inputRef = useRef<HTMLInputElement>()

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0)

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, [autoFocus])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value?.length || 0)
  }

  const onBlur = () => {
    setIsFocused(false)
  }
  const onFocus = () => {
    setIsFocused(true)
  }
  const onSelect = (e: any) => {
    setCaretPosition(e.target?.selectionStart || 0)
  }

  const isCaretVisible = isFocused && !readonly

  return <div className={classNames({ cls: cls.InputWrapper, mods: { [cls.readOnly]: readonly }, additional: [className] })}>
    {!!placeholder && <div onClick={() => inputRef.current?.focus()} className={cls.placeholder}>{`${placeholder}>`}</div>}
    <div className={cls.caretWrapper}>

      <input
        ref={inputRef}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelect}
        className={cls.input}
        type={type}
        value={value}
        readOnly={readonly}
        {...otherProps}
      />
      {isCaretVisible && <span
        style={{ transform: `translate3d(${caretPosition}ch, 0, 0)` }}
        className={classNames({ cls: cls.caret, mods: {}, additional: [cls.caretAnimation] })}
      />}
    </div>
  </div>
})
