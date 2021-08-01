import { useState, useEffect } from 'react';

export default function useThemeSwitcher(initialTheme) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const storegedTheme = JSON.parse(localStorage.getItem('theme')) || {}
    if (storegedTheme.title) {
      setTheme(JSON.parse(localStorage.getItem('theme')))
    } else {
      localStorage.setItem('theme', JSON.stringify(theme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return [theme, setTheme];
}

