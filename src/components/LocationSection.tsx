import { Clock, MapPin, Navigation } from 'lucide-react'
import { store } from '../config/store'
import { SectionTitle } from './SectionTitle'

export function LocationSection() {
  const { location } = store

  return (
    <section aria-labelledby="localizacao-title" className="scroll-mt-6" id="localizacao">
      <SectionTitle id="localizacao-title" title="Onde estamos" />

      <div className="overflow-hidden rounded-3xl border border-acai-700 bg-acai-800">
        <iframe
          title="Mapa com a localização da Della Açaí"
          src={location.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-80 w-full border-0 bg-acai-900"
        />
        <p className="flex items-start gap-2 px-4 py-3 text-sm font-semibold text-acai-100">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-brand" aria-hidden="true" />
          {location.address}
        </p>
        <p className="flex items-start gap-2 border-t border-acai-700/60 px-4 py-3 text-sm font-semibold text-acai-100">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-lime-brand" aria-hidden="true" />
          {store.hours.label}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-acai-700 bg-acai-800 px-4 py-3 font-display font-bold text-cream shadow-chunky-acai transition-all hover:border-lime-brand/60 active:translate-y-1 active:shadow-none"
        >
          <MapPin className="h-4 w-4 text-lime-brand" aria-hidden="true" />
          Abrir no Maps
        </a>
        <a
          href={location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-lime-brand px-4 py-3 font-display font-bold text-acai-950 shadow-chunky transition-all hover:bg-[#9BE04B] active:translate-y-1 active:shadow-none"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Traçar rota
        </a>
      </div>
    </section>
  )
}
