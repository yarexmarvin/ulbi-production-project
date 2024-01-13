import { getUserAuthData } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { type AppRouterProps } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route: AppRouterProps) => !route.authOnly || isAuth), [isAuth])

  return <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routes).map(({ path, element }) =>
        <Route key={path} path={path} element={
          <div className='page-wrapper'>
            {element}
          </div>} />
      )}
    </Routes>
  </Suspense>
})

export default AppRouter
