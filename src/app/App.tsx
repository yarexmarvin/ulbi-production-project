import { AppRouter } from 'app/providers/route'
import { Navbar } from 'widgets/Navbar'

import { classNames } from 'shared/lib/classNames'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks'
import { getUserInited, userActions } from 'entities/User'
import { useSelector } from 'react-redux'

const App = () => {
  const dispatch = useAppDispatch();

  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initUser())
  }, [dispatch])

  return <div className={classNames({ cls: 'app' })}>

    <Suspense fallback="">
      <Navbar />

      <div className="content-page">
        <Sidebar />
        {inited && <AppRouter />}

      </div>
    </Suspense>
  </div>
}

export default App
