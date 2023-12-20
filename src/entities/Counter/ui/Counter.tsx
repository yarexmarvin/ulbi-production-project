import { useTransition } from 'react';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }

  const { t } = useTranslation('counter')

  return (
    <div>
      <h1 data-testid="value">
        {counterValue}
      </h1>
      <Button data-testid="increment-btn" onClick={handleIncrement}>{t('Увеличить на 1')}</Button>
      <Button data-testid="decrement-btn" onClick={handleDecrement}>{t('Уменьшить на 1')}</Button>
    </div>
  );
}
