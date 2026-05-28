/**
 * Dark Mode Manager
 * Handles automatic dark mode detection and manual toggle
 */

class DarkModeManager {
  constructor() {
    this.storageKey = 'darkMode'
    this.init()
  }

  init() {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem(this.storageKey)
    
    if (savedMode !== null) {
      // Use saved preference
      this.setDarkMode(savedMode === 'true')
    } else {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.setDarkMode(prefersDark)
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem(this.storageKey) === null) {
        this.setDarkMode(e.matches)
      }
    })

    // Setup toggle button
    this.setupToggleButton()
  }

  setDarkMode(isDark) {
    const html = document.documentElement
    
    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    
    localStorage.setItem(this.storageKey, isDark)
    this.updateToggleIcon(isDark)
  }

  toggle() {
    const isDark = document.documentElement.classList.contains('dark')
    this.setDarkMode(!isDark)
  }

  setupToggleButton() {
    const toggleBtn = document.getElementById('darkModeToggle')
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle())
      this.updateToggleIcon(document.documentElement.classList.contains('dark'))
    }
  }

  updateToggleIcon(isDark) {
    const toggleBtn = document.getElementById('darkModeToggle')
    
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro')
      toggleBtn.textContent = isDark ? '☀️' : '🌙'
    }
  }

  isDarkMode() {
    return document.documentElement.classList.contains('dark')
  }
}

// Initialize on DOM content loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.darkModeManager = new DarkModeManager()
  })
} else {
  window.darkModeManager = new DarkModeManager()
}
