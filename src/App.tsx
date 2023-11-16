import { Route, Routes } from "react-router-dom"

import './styles/index.scss'
import { Link } from "react-router-dom"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { Suspense, useContext, useState } from "react"
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"



const App = () => {


  const { theme, toggleTheme } = useTheme()


  return <div className={classNames({ cls: 'app', additional: [theme] })}>
    <button onClick={toggleTheme}>TOGGLE THEME</button>
    <Link to='/'>main page</Link>
    <Link to='/about'>abput page</Link>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPageAsync />} />
        <Route path="/about" element={<AboutPageAsync />} />
      </Routes>
    </Suspense>
  </div>
}

export default App