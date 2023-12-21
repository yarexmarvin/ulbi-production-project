import { AppRouter } from 'app/providers/route'
import { Navbar } from 'widgets/Navbar'

import { classNames } from 'shared/lib/classNames'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

const App = () => {
  return <div className={classNames({ cls: 'app' })}>

    <Suspense fallback="">
      <Navbar />

      <div className="content-page">
        <Sidebar />
        <AppRouter />

      </div>
    </Suspense>
  </div>
}

export default App
