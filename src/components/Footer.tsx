import logo from '../assets/logo-della-acai.jpg'
import { store } from '../config/store'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'

export function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center gap-3 border-t border-acai-700/60 pb-24 pt-8 text-center">
      <img src={logo} alt="" width={56} height={56} className="h-14 w-14 rounded-full border-2 border-acai-700" />
      <div className="flex gap-3">
        <a
          href={store.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${store.instagram.handle}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-acai-800 text-acai-100 transition-colors hover:text-lime-brand"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
        <a
          href={store.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-acai-800 text-acai-100 transition-colors hover:text-lime-brand"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
      <p className="text-xs text-acai-400">{store.location.address}</p>
      <p className="text-xs text-acai-400">© {new Date().getFullYear()} {store.name}</p>
    </footer>
  )
}
