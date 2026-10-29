export interface MenuCategory {
  id: 'cremes' | 'mix' | 'coberturas' | 'frutas'
  label: string
  emoji: string
  description: string
  items: string[]
}

export const menu: MenuCategory[] = [
  {
    id: 'cremes',
    label: 'Cremes',
    emoji: '🍨',
    description: 'A base do seu copo',
    items: [
      'Açaí', 'Banana', 'Ninho', 'Morango', 'Oreo', 'Tapioca', 'Cupuaçu',
      'Maracujá', 'Abacaxi', 'Castanha', 'Paçoquita', 'Limão', 'Nutella',
      'Ovomaltine c/ Cookie',
    ],
  },
  {
    id: 'mix',
    label: 'Mix',
    emoji: '🥜',
    description: 'Crocantes e docinhos pra completar',
    items: [
      'Leite em pó', 'Castanha banda', 'Castanha triturada', 'Castanha caramelizada',
      'Paçoquita', 'Granola', 'Sucrilhos', 'Amendoim', 'Ganache de chocolate',
      'Calda de morango', 'Doce de leite', 'Chocobool', 'Chocopower', 'M&M',
      'Cereja', 'Jujuba', 'Farinha láctea', 'Pó de guaraná', 'Gotas de chocolate',
      'Coco ralado', "D'Cookies cream", "D'Cookies branco", 'Chocowafer',
      'Chocowafer branco', 'Granulado de chocolate', 'Marshmallow',
      'Canudos recheados', 'Biscoito Oreo', 'Uva passa',
    ],
  },
  {
    id: 'coberturas',
    label: 'Coberturas',
    emoji: '🍯',
    description: 'Aquela calda por cima',
    items: [
      'Chocolate', 'Morango', 'Caramelo', 'Leite condensado', 'Mel', 'Kiwi',
      'Menta', 'Limão', 'Uva',
    ],
  },
  {
    id: 'frutas',
    label: 'Frutas',
    emoji: '🍓',
    description: 'Fresquinhas',
    items: ['Banana', 'Morango', 'Manga', 'Kiwi'],
  },
]
