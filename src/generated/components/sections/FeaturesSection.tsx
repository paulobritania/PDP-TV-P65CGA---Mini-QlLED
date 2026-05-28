'use client'
import { Card, CardTitle, CardContent } from '@/generated/components/ui/Card'
const features = [
  { title: 'Responsivo', description: 'Mobile, tablet e desktop.', icon: '📱' },
  { title: 'Dark Mode', description: 'Tema escuro automático.', icon: '🌙' },
  { title: 'Acessível', description: 'WCAG 2.1 AA compatível.', icon: '♿' },
  { title: 'TypeScript', description: 'Type-safe completo.', icon: '📘' },
]
export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Recursos Principais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardContent className="mt-2">{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
