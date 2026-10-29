import { Clock } from 'lucide-react'
import { store } from '../config/store'
import { useOpenStatus } from '../hooks/useOpenStatus'

export function OpenStatusBadge() {
  const { isOpen, message } = useOpenStatus()

  return (
    <div className="flex flex-col items-center gap-1.5" role="status" aria-live="polite">
      <span
        className={[
          'flex items-center gap-2 rounded-full border px-4 py-1.5 font-display text-sm font-bold',
          isOpen
            ? 'border-lime-brand/50 bg-lime-brand/15 text-lime-brand'
            : 'border-rose-400/40 bg-rose-500/10 text-rose-300',
        ].join(' ')}
      >
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          {isOpen && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-brand opacity-75" />
          )}
          <span
            className={[
              'relative inline-flex h-2.5 w-2.5 rounded-full',
              isOpen ? 'bg-lime-brand' : 'bg-rose-400',
            ].join(' ')}
          />
        </span>
        {isOpen ? 'Aberto agora' : 'Fechado agora'}
        <span className="font-body font-semibold text-acai-100/90">· {message}</span>
      </span>
      <span className="flex items-center gap-1 text-xs text-acai-400">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {store.hours.label}
      </span>
    </div>
  )
}
