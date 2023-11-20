
import './styles/index.scss'

import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/route"
import { Navbar } from 'widgets/Navbar'

import { classNames } from "shared/lib/classNames"




const App = () => {


  const { theme, toggleTheme } = useTheme()


  return <div className={classNames({ cls: 'app', additional: [theme] })}>
    <Navbar className={theme} />
    <AppRouter />
    <button onClick={toggleTheme}>TOGGLE THEME</button>
  </div>
}

export default App