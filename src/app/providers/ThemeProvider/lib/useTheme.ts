import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeHook {
  theme: Theme
  toggleTheme: () => void

}

export const useTheme = (): UseThemeHook => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)

    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}
