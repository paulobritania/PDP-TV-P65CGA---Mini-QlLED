'use client'
import { useEffect, useState } from 'react'
export function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(isDarkMode || prefersDark)
  }, [])
  useEffect(() => {
    if (!isMounted) return
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDark.toString())
  }, [isDark, isMounted])
  return { isDark, setIsDark, isMounted }
}
