import { useState } from "react"
import classes from './Counter.module.scss';

export const Counter = () => {

  const [counter, setCounter] = useState(0);


  const onHandleIncrease = () => {
    setCounter(prev => prev + 1)
  }


  return <div className={classes.counter}>
    <h1>{counter}</h1>
    <button className={classes.button} onClick={onHandleIncrease}>Increase</button>
  </div>
}