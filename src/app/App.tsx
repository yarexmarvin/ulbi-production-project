
import './styles/index.scss'

import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/route"
import { Navbar } from 'widgets/Navbar'

import { classNames } from "shared/lib/classNames"
import { Sidebar } from 'widgets/Sidebar'





const App = () => {


  const { theme } = useTheme()


  return <div className={classNames({ cls: 'app', additional: [theme] })}>
    <Navbar className={theme} />
    <div className="content-page">
      <Sidebar />
      <AppRouter />

    </div>
  </div>
}

export default App