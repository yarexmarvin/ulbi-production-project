import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/route'
import { Navbar } from 'widgets/Navbar'

import { classNames } from 'shared/lib/classNames'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

const App = () => {
  const { theme } = useTheme()

  return <div className={classNames({ cls: 'app', additional: [theme] })}>

    <Suspense fallback="">
      <Navbar className={theme} />

      <div className="content-page">
        <Sidebar />
        <AppRouter />

      </div>
    </Suspense>
  </div>
}

export default App
