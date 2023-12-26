import { type FC, type PropsWithChildren, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps {
  initialTheme?: Theme
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<PropsWithChildren & ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => {
    return { theme, setTheme }
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeProvider
