import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { menu, type MenuCategory } from '../data/menu'
import { store } from '../config/store'
import { SectionTitle } from './SectionTitle'

export function MenuCatalog() {
  const [activeId, setActiveId] = useState<MenuCategory['id']>('cremes')
  const active = menu.find((category) => category.id === activeId) ?? menu[0]

  return (
    <section aria-labelledby="cardapio-title" className="scroll-mt-6" id="cardapio">
      <SectionTitle id="cardapio-title" title="Monte seu açaí" subtitle="Escolha creme, mix, cobertura e frutas" />

      <div role="tablist" aria-label="Categorias do cardápio" className="grid grid-cols-4 gap-1.5 rounded-3xl border border-acai-700 bg-acai-800 p-1.5">
        {menu.map((category) => {
          const selected = category.id === activeId
          return (
            <button
              key={category.id}
              role="tab"
              type="button"
              id={`tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActiveId(category.id)}
              className={[
                'flex flex-col items-center rounded-2xl px-1 py-2 font-display text-sm font-bold transition-colors',
                selected ? 'bg-lime-brand text-acai-950' : 'text-acai-100 hover:bg-acai-700/60',
              ].join(' ')}
            >
              <span aria-hidden="true" className="text-lg leading-none">{category.emoji}</span>
              {category.label}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-4 rounded-3xl border border-acai-700 bg-acai-800/70 p-4"
      >
        <p className="mb-3 flex items-baseline justify-between text-sm">
          <span className="font-semibold text-acai-100">{active.description}</span>
          <span className="text-acai-400">{active.items.length} opções</span>
        </p>
        <ul key={active.id} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {active.items.map((item, index) => (
            <li
              key={item}
              style={{ animationDelay: `${Math.min(index * 20, 400)}ms` }}
              className="flex h-14 animate-rise items-center justify-center rounded-2xl border border-acai-700 bg-acai-900/80 px-3 text-center text-sm font-semibold leading-tight text-cream"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={store.deliveryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-lime-brand px-6 py-3.5 font-display text-lg font-bold text-acai-950 shadow-chunky transition-all hover:bg-[#9BE04B] active:translate-y-1 active:shadow-none"
      >
        <ShoppingBag className="h-5 w-5" aria-hidden="true" />
        Montar meu pedido
      </a>
    </section>
  )
}
