import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-6 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    orange:
      'bg-orange-500 text-white hover:bg-orange-700 hover:text-orange-100 active:bg-orange-800 active:text-orange-300 focus-visible:outline-orange-400',
   Blue : 'bg-blue-600 text-white hover:text-orange-100 hover:bg-blue-400 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-orange-400 hover:bg-blue-50 active:bg-blue-200 active:text-orange-600 focus-visible:outline-white',
  },
  outline: {
    orange:
      'ring-orange-200 text-orange-700 hover:text-orange-400 hover:ring-orange-300 active:bg-orange-100 active:text-orange-600 focus-visible:outline-blue-600 focus-visible:ring-orange-300',
    white:
      'ring-orange-400 text-white hover:ring-orange-400 active:ring-orange-700 active:text-orange-400 focus-visible:outline-white',
  },
}

export function Button({
  variant = 'solid',
  color = 'orange',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
