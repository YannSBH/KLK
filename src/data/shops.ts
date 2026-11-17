// Supermarchés, centres commerciaux et marchés par zone.
// Sources : Grand Bay of the Sea (août 2026), Everything Punta Cana (sept. 2026),
// El Dinero (23 sept. 2026, Las Terrenas), Expat Exchange (Puerto Plata).
import type { T } from '../i18n';

export type ShopKind = 'super' | 'mall' | 'market';
export type Shop = { id: string; name: string; kind: ShopKind; query: string; note: T };
export type ShopZone = { id: string; name: string; shops: Shop[] };

export const shopZones: ShopZone[] = [
  {
    id: 'pc',
    name: 'Punta Cana / Bávaro',
    shops: [
      {
        id: 'bravo', name: 'Bravo', kind: 'super', query: 'Supermercado Bravo Avenida Barceló Bávaro',
        note: {
          fr: 'Le moins cher pour un gros panier. Av. Barceló, en face de Downtown Mall. 6 h – minuit, fermé le dimanche.',
          en: 'Cheapest for a full basket. Av. Barceló, across from Downtown Mall. 6 a.m.–midnight, closed Sundays.',
          es: 'El más barato para una compra grande. Av. Barceló, frente a Downtown Mall. 6 a. m. – medianoche, cierra los domingos.',
        },
      },
      {
        id: 'jumbopc', name: 'Jumbo', kind: 'super', query: 'Jumbo Downtown Mall Punta Cana',
        note: {
          fr: 'Hypermarché dans Downtown Mall : courses, pharmacie, affaires de plage, électronique. Ouvert tous les jours.',
          en: 'Hypermarket inside Downtown Mall: groceries, pharmacy, beach gear, electronics. Open every day.',
          es: 'Hipermercado en Downtown Mall: comida, farmacia, cosas de playa, electrónica. Abre todos los días.',
        },
      },
      {
        id: 'nacionalpc', name: 'Supermercado Nacional', kind: 'super', query: 'Supermercado Nacional Punta Cana',
        note: {
          fr: 'Plus cher, mais beaucoup de produits importés, vins, fromages, options sans gluten et vegan. Près de l’aéroport.',
          en: 'Pricier, but lots of imported goods, wine, cheese, gluten-free and vegan options. Near the airport.',
          es: 'Más caro, pero con muchos importados, vinos, quesos, opciones sin gluten y veganas. Cerca del aeropuerto.',
        },
      },
      {
        id: 'sirenapc', name: 'Sirena Market', kind: 'super', query: 'Sirena Market San Juan Shopping Center Bávaro',
        note: { fr: 'Dans le San Juan Shopping Center, à Bávaro.', en: 'Inside San Juan Shopping Center, Bávaro.', es: 'Dentro de San Juan Shopping Center, Bávaro.' },
      },
      {
        id: 'ole', name: 'Hipermercados Olé', kind: 'super', query: 'Hipermercado Olé Bávaro',
        note: { fr: 'Grand hypermarché à Bávaro, fréquenté par les gens du coin.', en: 'Big hypermarket in Bávaro, popular with locals.', es: 'Gran hipermercado en Bávaro, muy local.' },
      },
      {
        id: 'bluemall', name: 'BlueMall Puntacana', kind: 'mall', query: 'BlueMall Puntacana',
        note: {
          fr: 'Le centre commercial chic : boutiques de marque, restos, glaces. Navette gratuite depuis certains hôtels. Ferme à 20 h.',
          en: 'The upscale mall: brand stores, restaurants, ice cream. Free shuttle from some hotels. Closes 8 p.m.',
          es: 'El centro comercial de lujo: tiendas de marca, restaurantes, helados. Transporte gratis desde algunos hoteles. Cierra a las 8 p. m.',
        },
      },
      {
        id: 'downtown', name: 'Downtown Mall Punta Cana', kind: 'mall', query: 'Downtown Mall Punta Cana',
        note: { fr: 'Jumbo, magasins, électronique, cafés. Ferme à 22 h.', en: 'Jumbo, shops, electronics, cafés. Closes 10 p.m.', es: 'Jumbo, tiendas, electrónica, cafés. Cierra a las 10 p. m.' },
      },
      {
        id: 'sanjuan', name: 'San Juan Shopping Center', kind: 'mall', query: 'San Juan Shopping Center Bávaro',
        note: { fr: 'Boutiques, banques, restos et supermarché. Ouvert jusqu’à 23 h.', en: 'Shops, banks, restaurants and a supermarket. Open until 11 p.m.', es: 'Tiendas, bancos, restaurantes y supermercado. Abre hasta las 11 p. m.' },
      },
      {
        id: 'pcvillage', name: 'Puntacana Village', kind: 'mall', query: 'Puntacana Village',
        note: { fr: 'Près de l’aéroport : supermarché, pharmacie, banque, restos.', en: 'Near the airport: supermarket, pharmacy, bank, restaurants.', es: 'Cerca del aeropuerto: supermercado, farmacia, banco, restaurantes.' },
      },
      {
        id: 'bibijagua', name: 'Mercado Bibijagua', kind: 'market', query: 'Mercado Bibijagua Bávaro',
        note: {
          fr: 'Marché artisanal en bord de plage, plus de 100 stands : souvenirs, rhum, café, cigares. Négocie !',
          en: 'Beachside craft market, 100+ stalls: souvenirs, rum, coffee, cigars. Haggle!',
          es: 'Mercado artesanal junto a la playa, más de 100 puestos: recuerdos, ron, café, cigarros. ¡Regatea!',
        },
      },
    ],
  },
  {
    id: 'sd',
    name: 'Santo Domingo',
    shops: [
      {
        id: 'nacionalsd', name: 'Supermercado Nacional', kind: 'super', query: 'Supermercado Nacional Santo Domingo',
        note: { fr: 'Nombreuses succursales. Large choix, produits importés.', en: 'Many branches. Wide choice, imported goods.', es: 'Muchas sucursales. Gran surtido, productos importados.' },
      },
      {
        id: 'jumbosd', name: 'Jumbo', kind: 'super', query: 'Jumbo Santo Domingo',
        note: { fr: 'Hypermarché : courses, maison, électronique.', en: 'Hypermarket: groceries, home, electronics.', es: 'Hipermercado: comida, hogar, electrónica.' },
      },
      {
        id: 'sirenasd', name: 'La Sirena', kind: 'super', query: 'La Sirena Santo Domingo',
        note: { fr: 'Supermarché et grand magasin, prix corrects.', en: 'Supermarket and department store, fair prices.', es: 'Supermercado y tienda por departamentos, buenos precios.' },
      },
      {
        id: 'bravosd', name: 'Bravo', kind: 'super', query: 'Supermercado Bravo Santo Domingo',
        note: { fr: 'Parmi les moins chers.', en: 'Among the cheapest.', es: 'Entre los más baratos.' },
      },
      {
        id: 'agora', name: 'Ágora Mall', kind: 'mall', query: 'Ágora Mall Santo Domingo',
        note: { fr: 'Grand centre commercial avec supermarché, cinéma et restos.', en: 'Big mall with supermarket, cinema and restaurants.', es: 'Gran centro comercial con supermercado, cine y restaurantes.' },
      },
      {
        id: 'bluemallsd', name: 'BlueMall Santo Domingo', kind: 'mall', query: 'BlueMall Santo Domingo',
        note: { fr: 'Le centre commercial haut de gamme de la capitale.', en: 'The capital’s upscale mall.', es: 'El centro comercial de lujo de la capital.' },
      },
      {
        id: 'sambil', name: 'Sambil Santo Domingo', kind: 'mall', query: 'Sambil Santo Domingo',
        note: { fr: 'Très grand centre commercial, cinéma, nombreuses boutiques.', en: 'Huge mall, cinema, lots of shops.', es: 'Centro comercial enorme, cine, muchas tiendas.' },
      },
    ],
  },
  {
    id: 'lt',
    name: 'Las Terrenas',
    shops: [
      {
        id: 'sirenalt', name: 'Sirena Las Terrenas', kind: 'super', query: 'Sirena Las Terrenas',
        note: { fr: 'Ouvert en septembre 2026.', en: 'Opened September 2026.', es: 'Abrió en septiembre de 2026.' },
      },
      {
        id: 'mercajumbolt', name: 'MercaJumbo Las Terrenas', kind: 'super', query: 'MercaJumbo Las Terrenas',
        note: { fr: 'Ouvert en septembre 2026, juste en face de Sirena.', en: 'Opened September 2026, right across from Sirena.', es: 'Abrió en septiembre de 2026, justo frente a Sirena.' },
      },
    ],
  },
  {
    id: 'pp',
    name: 'Puerto Plata',
    shops: [
      {
        id: 'sirenapp', name: 'La Sirena Puerto Plata', kind: 'super', query: 'La Sirena Puerto Plata',
        note: {
          fr: 'Av. Manolo Tavárez Justo. Courses, vêtements, électronique ; bon choix de rhums et chocolats locaux.',
          en: 'Av. Manolo Tavárez Justo. Groceries, clothing, electronics; good local rum and chocolate.',
          es: 'Av. Manolo Tavárez Justo. Comida, ropa, electrónica; buen surtido de ron y chocolate local.',
        },
      },
      {
        id: 'mercaditopp', name: 'El Mercadito', kind: 'market', query: 'El Mercadito Puerto Plata',
        note: { fr: 'Marché local : fruits, légumes, viande, poisson, eau de coco.', en: 'Local market: fruit, veg, meat, fish, coconut water.', es: 'Mercado local: frutas, verduras, carne, pescado, agua de coco.' },
      },
      {
        id: 'playadorada', name: 'Playa Dorada Plaza', kind: 'mall', query: 'Playa Dorada Plaza Puerto Plata',
        note: { fr: 'Petit centre commercial avec marché artisanal.', en: 'Small mall with a craft market.', es: 'Pequeño centro comercial con mercado artesanal.' },
      },
    ],
  },
  {
    id: 'lr',
    name: 'La Romana / Bayahibe',
    shops: [
      {
        id: 'jumbolr', name: 'Jumbo / MercaJumbo', kind: 'super', query: 'Jumbo La Romana',
        note: { fr: 'Le grand supermarché de La Romana, à 20 min de Bayahibe.', en: 'La Romana’s big supermarket, 20 min from Bayahibe.', es: 'El gran supermercado de La Romana, a 20 min de Bayahibe.' },
      },
    ],
  },
];

export const shopTips: T[] = [
  {
    fr: 'Pour un petit besoin (eau, pain, savon, recharge téléphone), le colmado du coin suffit et il y en a partout.',
    en: 'For small needs (water, bread, soap, phone top-up), the corner colmado is enough, and they are everywhere.',
    es: 'Para algo pequeño (agua, pan, jabón, recarga), el colmado de la esquina basta y hay en todas partes.',
  },
  {
    fr: 'La carte bancaire est acceptée dans les grandes enseignes. Évite le 15 et la fin du mois : jours de paie, il y a foule.',
    en: 'Cards are accepted at big chains. Avoid the 15th and month-end: paydays, very busy.',
    es: 'Las grandes cadenas aceptan tarjeta. Evita el 15 y fin de mes: días de cobro, mucha gente.',
  },
  {
    fr: 'Rhum, café et chocolat coûtent bien moins cher au supermarché qu’à l’hôtel ou au duty free.',
    en: 'Rum, coffee and chocolate are far cheaper at the supermarket than at the hotel or duty free.',
    es: 'Ron, café y chocolate salen mucho más baratos en el súper que en el hotel o el duty free.',
  },
];

export const mapsQuery = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
