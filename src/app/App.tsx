import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/route'
import { Navbar } from 'widgets/Navbar'

import { classNames } from 'shared/lib/classNames'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useState } from 'react'
import Modal from 'shared/ui/Modal'

const App = () => {
  const { theme } = useTheme()

  const [isShown, setIsShown] = useState(false)

  const toggleModal = () => {
    setIsShown(prev => !prev)
  }

  return <div className={classNames({ cls: 'app', additional: [theme] })}>

    <Suspense fallback="">
      <Navbar className={theme} />
      <Modal isOpen={isShown} onClose={toggleModal}>
        <p>modal content</p>
      </Modal>
      <div className="content-page">
        <Sidebar />
        <AppRouter />
        <button onClick={toggleModal}>Open modal</button>

      </div>
    </Suspense>
  </div>
}

export default App
