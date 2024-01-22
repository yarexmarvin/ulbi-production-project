import { getUserAuthData } from 'entities/User';
import { MainPage } from 'pages/MainPage';
import { useSelector } from 'react-redux';

function RequireAuth ({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <MainPage />;
  }

  return children
}

export default RequireAuth
