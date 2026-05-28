'use client'
import Button from '@/generated/components/ui/Button'
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6">
            Seu Produto Incrível
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed">
            Crie experiências incríveis com componentes responsivos e modernos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Começar Agora
            </Button>
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
