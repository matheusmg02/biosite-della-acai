import { useEffect, useState } from 'react'
import { store } from '../config/store'

export type OpenStatus =
  | { isOpen: true; message: string }
  | { isOpen: false; message: string }

const CLOSING_SOON_MINUTES = 30

function toMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

// Minutes since midnight in the store's timezone, regardless of the visitor's timezone.
function minutesNowInStoreTime(date: Date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: store.hours.timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0)
  return get('hour') * 60 + get('minute')
}

export function getOpenStatus(date = new Date()): OpenStatus {
  const { open, close } = store.hours
  const now = minutesNowInStoreTime(date)
  const openAt = toMinutes(open)
  const closeAt = toMinutes(close)

  if (now >= openAt && now < closeAt) {
    const minutesLeft = closeAt - now
    return {
      isOpen: true,
      message:
        minutesLeft <= CLOSING_SOON_MINUTES
          ? `Fecha em ${minutesLeft} min`
          : `Fecha às ${close}`,
    }
  }

  return {
    isOpen: false,
    message: now < openAt ? `Abre hoje às ${open}` : `Abre amanhã às ${open}`,
  }
}

export function useOpenStatus() {
  const [status, setStatus] = useState(() => getOpenStatus())

  useEffect(() => {
    const id = window.setInterval(() => setStatus(getOpenStatus()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return status
}
