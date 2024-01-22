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
    const newTheme = getNextTheme(theme)

    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}

const getNextTheme = (theme: Theme) => {
  switch (theme) {
    case Theme.LIGHT:
      return Theme.DARK;
    case Theme.DARK:
      return Theme.BLUE
    case Theme.BLUE:
      return Theme.LIGHT
    default: return Theme.LIGHT
  }
}
