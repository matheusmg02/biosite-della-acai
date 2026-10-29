import { store } from '../config/store'
import { WhatsAppIcon } from './BrandIcons'

export function FloatingWhatsApp() {
  return (
    <a
      href={store.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lime-brand text-acai-900 shadow-chunky transition-all hover:scale-105 hover:bg-[#9BE04B] active:translate-y-1 active:shadow-none"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
