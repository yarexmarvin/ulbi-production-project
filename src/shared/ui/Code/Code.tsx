import { useCallback, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Code.module.scss';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

interface CodeProps {
  className?: string
  text: string
}

export function Code (props: PropsWithChildren<CodeProps>) {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div
      className={classNames({
        cls: cls.CodeWrapper,
        mods: {},
        additional: [className]
      })}
    >
      <Button className={cls.copyBtn} theme={ThemeButton.CLEAR}>
        <CopyIcon onClick={onCopy} className={cls.copyIcon} />
      </Button>
      <pre className={cls.Code}>
        <code>{text}</code>
      </pre>
    </div>
  );
}
