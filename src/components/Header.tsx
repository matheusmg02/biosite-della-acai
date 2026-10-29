import { Bike, ShoppingBag } from 'lucide-react'
import logo from '../assets/logo-della-acai.jpg'
import { store } from '../config/store'
import { OpenStatusBadge } from './OpenStatusBadge'

export function Header() {
  return (
    <header className="flex flex-col items-center pt-10 text-center">
      <div className="relative animate-rise">
        <div className="absolute inset-0 rounded-full shadow-glow" aria-hidden="true" />
        <img
          src={logo}
          alt="Logo da Della Açaí"
          width={144}
          height={144}
          className="relative h-36 w-36 rounded-full border-4 border-acai-700 object-cover"
        />
      </div>

      <h1 className="mt-5 animate-rise font-display text-5xl font-extrabold leading-none [animation-delay:80ms]">
        <span className="inline-block -skew-x-6 text-lime-brand">Della</span>{' '}
        <span className="inline-block -skew-x-6 text-cream [text-shadow:0_3px_0_#5B2A86]">Açaí</span>
      </h1>

      <p className="mt-3 animate-rise text-base font-semibold text-acai-100 [animation-delay:160ms]">
        {store.tagline}
      </p>

      <div className="mt-4 animate-rise [animation-delay:200ms]">
        <OpenStatusBadge />
      </div>

      <ul className="mt-4 flex animate-rise flex-wrap justify-center gap-2 [animation-delay:240ms]">
        <li className="flex items-center gap-1.5 rounded-full border border-acai-700 bg-acai-800/80 px-3 py-1 text-xs font-bold text-acai-100">
          <ShoppingBag className="h-3.5 w-3.5 text-lime-brand" aria-hidden="true" />
          {store.minOrder}
        </li>
        <li className="flex items-center gap-1.5 rounded-full border border-lime-brand/40 bg-lime-brand/10 px-3 py-1 text-xs font-bold text-lime-brand">
          <Bike className="h-3.5 w-3.5" aria-hidden="true" />
          {store.freeDelivery}
        </li>
      </ul>
    </header>
  )
}
