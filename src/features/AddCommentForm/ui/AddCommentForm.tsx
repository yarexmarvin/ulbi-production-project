import { useCallback, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
  getAddCommentIsLoading,
  getAddCommentText
} from 'features/AddCommentForm/model/selectors/getAddCommentState';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { addCommentFormActions } from 'features/AddCommentForm/model/slice/addCommentFormSlice';

import { useTranslation } from 'react-i18next';

interface AddCommentFormProps {
  className?: string
  onSendComment?: (text: string) => void
}

const AddCommentForm = (props: PropsWithChildren<AddCommentFormProps>) => {
  const { className, onSendComment } = props;

  const { t } = useTranslation();

  const text = useSelector(getAddCommentText);
  // const error = useSelector(getAddCommentError);
  const isLoading = useSelector(getAddCommentIsLoading);

  const dispatch = useAppDispatch();

  const onChangeCommentText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  return (
    <div
      className={classNames({
        cls: cls.AddCommentForm,
        mods: {},
        additional: [className]
      })}
    >
      <Input
        placeholder="Введите текст"
        value={text}
        className={cls.input}
        onChange={onChangeCommentText}
      />
      <Button
        disabled={isLoading}
        theme={ThemeButton.OUTLINE}
        onClick={() => onSendComment(text)}
      >
        {t('Отправить')}
      </Button>
    </div>
  );
};

export default AddCommentForm;
