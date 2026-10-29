import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

interface LinkButtonProps {
  href: string
  icon: ReactNode
  title: string
  subtitle?: ReactNode
  variant?: 'primary' | 'default'
  external?: boolean
  delay?: number
}

export function LinkButton({
  href,
  icon,
  title,
  subtitle,
  variant = 'default',
  external = true,
  delay = 0,
}: LinkButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      style={{ animationDelay: `${delay}ms` }}
      className={[
        'group flex animate-rise items-center gap-4 rounded-3xl px-5 transition-all duration-150 active:translate-y-1 active:shadow-none',
        isPrimary
          ? 'bg-lime-brand py-5 text-acai-950 shadow-chunky hover:bg-[#9BE04B]'
          : 'border border-acai-700 bg-acai-800 py-4 text-cream shadow-chunky-acai hover:border-lime-brand/60 hover:bg-[#46206a]',
      ].join(' ')}
    >
      <span
        className={[
          'flex shrink-0 items-center justify-center rounded-2xl',
          isPrimary ? 'h-12 w-12 bg-acai-900 text-lime-brand' : 'h-11 w-11 bg-acai-700/60 text-lime-brand',
        ].join(' ')}
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className={['font-display font-bold leading-tight', isPrimary ? 'text-xl' : 'text-lg'].join(' ')}>
          {title}
        </span>
        {subtitle && (
          <span className={['truncate text-sm', isPrimary ? 'font-semibold text-acai-800' : 'text-acai-100/80'].join(' ')}>
            {subtitle}
          </span>
        )}
      </span>
      <ChevronRight
        aria-hidden="true"
        className={[
          'h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1',
          isPrimary ? 'text-acai-900' : 'text-acai-400',
        ].join(' ')}
      />
    </a>
  )
}
