import RequireAuth from 'app/providers/route/ui/RequireAuth'

import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { type AppRouterProps } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    const element = <Suspense fallback={<PageLoader />}>
      <div className='page-wrapper'>
        {route.element}
      </div>
    </Suspense>

    return <Route key={route.path} path={route.path} element={
      route.authOnly
        ? <RequireAuth>{element}</RequireAuth>
        : element} />
  }, [])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  )
})

export default AppRouter
