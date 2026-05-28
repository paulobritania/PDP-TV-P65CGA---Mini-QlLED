export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const responsiveClasses = {
  container: 'w-full px-4 sm:px-6 lg:px-8',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6',
  heading: 'text-2xl sm:text-3xl lg:text-4xl font-bold',
  body: 'text-base sm:text-lg leading-relaxed',
}
