'use client'
import HeroSection from '@/generated/components/sections/HeroSection'
import FeaturesSection from '@/generated/components/sections/FeaturesSection'
import { useDarkMode } from '@/generated/hooks/useDarkMode'
export default function App() {
  const { isDark, setIsDark, isMounted } = useDarkMode()
  if (!isMounted) return null
  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MyApp</h1>
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>
        <main>
          <HeroSection />
          <FeaturesSection />
        </main>
        <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center text-gray-600 dark:text-gray-400">
            <p>© 2026 MyApp. Gerado do Figma.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
