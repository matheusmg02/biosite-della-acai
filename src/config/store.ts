const address = 'Rua José Buson, 310 - Fortaleza/CE, 60851-170'
const mapsQuery = encodeURIComponent('Rua José Buson, 310, Fortaleza - CE, 60851-170')

export const store = {
  name: 'Della Açaí',
  tagline: 'O melhor açaí de Fortaleza 💜 Peça no delivery!',
  minOrder: 'Pedidos a partir de R$ 10,00',
  freeDelivery: 'Entrega grátis a partir de R$ 15,00',
  deliveryUrl: 'https://dellaacaidelivery.clientefiel.app/delivery',
  whatsapp: {
    display: '(85) 98532-6879',
    url: `https://wa.me/5585985326879?text=${encodeURIComponent(
      'Olá! Vim pelo site e gostaria de fazer um pedido 💜',
    )}`,
  },
  instagram: {
    handle: '@dellaacaioficial',
    url: 'https://instagram.com/dellaacaioficial',
  },
  hours: {
    timeZone: 'America/Fortaleza',
    open: '19:30',
    close: '23:00',
    label: 'Todos os dias, das 19:30 às 23:00',
  },
  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJI1arxc1IxwcRiSTJ61CKcB0',
  location: {
    address,
    embedUrl: `https://maps.google.com/maps?q=${mapsQuery}&z=17&output=embed`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  },
} as const
