
import './styles/index.scss'
import { Link } from "react-router-dom"

import { useTheme } from "app/providers/ThemeProvider"

import { classNames } from "shared/lib/classNames"

import { AppRouter } from "app/providers/route"



const App = () => {


  const { theme, toggleTheme } = useTheme()


  return <div className={classNames({ cls: 'app', additional: [theme] })}>
    <button onClick={toggleTheme}>TOGGLE THEME</button>
    <Link to='/'>main page</Link>
    <Link to='/about'>abput page</Link>
    <AppRouter />
  </div>
}

export default App