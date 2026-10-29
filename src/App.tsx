import { Bike, MapPin, Star } from 'lucide-react'
import { store } from './config/store'
import { BerryPattern } from './components/BerryPattern'
import { GoogleIcon, InstagramIcon, WhatsAppIcon } from './components/BrandIcons'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LinkButton } from './components/LinkButton'
import { LocationSection } from './components/LocationSection'
import { MenuCatalog } from './components/MenuCatalog'

export default function App() {
  return (
    <>
      <BerryPattern />
      <div className="mx-auto w-full max-w-[480px] px-4">
        <Header />

        <main className="mt-8 flex flex-col gap-12">
          <nav aria-label="Links principais" className="flex flex-col gap-3.5">
            <LinkButton
              variant="primary"
              href={store.deliveryUrl}
              icon={<Bike className="h-6 w-6" aria-hidden="true" />}
              title="Peça no Delivery"
              subtitle="Faça seu pedido online agora"
              delay={300}
            />
            <LinkButton
              href={store.whatsapp.url}
              icon={<WhatsAppIcon className="h-6 w-6" />}
              title="WhatsApp"
              subtitle={store.whatsapp.display}
              delay={360}
            />
            <LinkButton
              href={store.instagram.url}
              icon={<InstagramIcon className="h-6 w-6" />}
              title="Instagram"
              subtitle={store.instagram.handle}
              delay={420}
            />
            <LinkButton
              href={store.googleReviewUrl}
              icon={<GoogleIcon className="h-6 w-6" />}
              title="Avalie a gente no Google"
              subtitle={
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-lime-brand text-lime-brand" aria-hidden="true" />
                  ))}
                  <span className="ml-1.5">Deixe sua avaliação</span>
                </span>
              }
              delay={480}
            />
            <LinkButton
              href="#localizacao"
              external={false}
              icon={<MapPin className="h-6 w-6" aria-hidden="true" />}
              title="Como chegar"
              subtitle="Rua José Buson, 310"
              delay={540}
            />
          </nav>

          <MenuCatalog />
          <LocationSection />
        </main>

        <Footer />
      </div>
      <FloatingWhatsApp />
    </>
  )
}
