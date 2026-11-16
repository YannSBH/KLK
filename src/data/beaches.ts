import type { T } from '../i18n';

// Plages : photos libres de droits (Wikimedia Commons), créditées dans l'app.

const W = 'https://thumb.wikimedia.org/wikipedia/commons/thumb';

export type Beach = {
  id: string;
  name: string;
  region: T;
  text: T;
  tags: T[];
  // Coordonnées si connues, sinon recherche par nom dans Maps.
  coords?: { lat: number; lng: number };
  query: string;
  photo: { uri: string; credit: string; license: string; page: string };
};

export const beaches: Beach[] = [
  {
    id: 'bavaro',
    name: 'Playa Bávaro',
    region: { fr: 'Punta Cana', en: 'Punta Cana', es: 'Punta Cana' },
    text: { fr: 'Longue plage de sable blanc devant les hôtels, eau turquoise et plutôt calme.', en: 'Long white-sand beach in front of the hotels, turquoise and fairly calm water.', es: 'Larga playa de arena blanca frente a los hoteles, agua turquesa y bastante tranquila.' },
    tags: [{ fr: 'Baignade', en: 'Swimming', es: 'Baño' }, { fr: 'Familles', en: 'Families', es: 'Familias' }],
    query: 'Playa Bávaro, Punta Cana',
    photo: { uri: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Bavaro.jpg', credit: 'Leridant', license: 'CC BY-SA 2.5', page: 'https://commons.wikimedia.org/wiki/File:Bavaro.jpg' },
  },
  {
    id: 'macao',
    name: 'Playa Macao',
    region: { fr: 'Punta Cana', en: 'Punta Cana', es: 'Punta Cana' },
    text: { fr: 'Plage plus sauvage, avec des falaises et des vagues : un des spots de surf de la région.', en: 'A wilder beach with cliffs and waves: one of the area’s surf spots.', es: 'Playa más salvaje, con acantilados y olas: uno de los spots de surf de la zona.' },
    tags: [{ fr: 'Surf', en: 'Surf', es: 'Surf' }, { fr: 'Sauvage', en: 'Wild', es: 'Salvaje' }],
    coords: { lat: 18.7739, lng: -68.5371 },
    query: 'Playa Macao, Punta Cana',
    photo: { uri: `${W}/b/b4/Dominican_Republic_Landscape_Cliff.jpg/960px-Dominican_Republic_Landscape_Cliff.jpg`, credit: 'zuquirio (Flickr)', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Dominican_Republic_Landscape_Cliff.jpg' },
  },
  {
    id: 'saona',
    name: 'Isla Saona',
    region: { fr: 'Sud-est (parc national del Este)', en: 'Southeast (Parque Nacional del Este)', es: 'Sureste (Parque Nacional del Este)' },
    text: { fr: 'Île de carte postale, accessible uniquement en bateau, en général lors d’une excursion d’une journée.', en: 'Postcard island, reachable only by boat, usually on a day trip.', es: 'Isla de postal, solo accesible en barco, normalmente en una excursión de un día.' },
    tags: [{ fr: 'Excursion', en: 'Day trip', es: 'Excursión' }, { fr: 'Bateau', en: 'Boat', es: 'Barco' }],
    coords: { lat: 18.1556, lng: -68.6994 },
    query: 'Isla Saona',
    photo: { uri: `${W}/f/f0/Saona_Island_December_2020.jpg/960px-Saona_Island_December_2020.jpg`, credit: 'Danu Widjajanto', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Saona_Island_December_2020.jpg' },
  },
  {
    id: 'rincon',
    name: 'Playa Rincón',
    region: { fr: 'Samaná', en: 'Samaná', es: 'Samaná' },
    text: { fr: 'Grande plage sauvage bordée de cocotiers, souvent citée parmi les plus belles des Caraïbes. Peu d’infrastructures : prévois de l’eau.', en: 'Long wild beach lined with coconut palms, often named among the Caribbean’s finest. Few facilities: bring water.', es: 'Gran playa salvaje con cocoteros, a menudo citada entre las más bellas del Caribe. Pocos servicios: lleva agua.' },
    tags: [{ fr: 'Sauvage', en: 'Wild', es: 'Salvaje' }, { fr: 'Coup de cœur', en: 'Favorite', es: 'Favorita' }],
    coords: { lat: 19.2883, lng: -69.2483 },
    query: 'Playa Rincón, Samaná',
    photo: { uri: `${W}/c/cf/Playa_Rinc%C3%B3n_Dec_2020.jpg/960px-Playa_Rinc%C3%B3n_Dec_2020.jpg`, credit: 'Danu Widjajanto', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Playa_Rinc%C3%B3n_Dec_2020.jpg' },
  },
  {
    id: 'levantado',
    name: 'Cayo Levantado',
    region: { fr: 'Baie de Samaná', en: 'Samaná Bay', es: 'Bahía de Samaná' },
    text: { fr: 'Petite île dans la baie, accessible en bateau depuis Samaná. Souvent combinée avec la sortie baleines.', en: 'Small island in the bay, reached by boat from Samaná. Often combined with whale watching.', es: 'Pequeña isla en la bahía, en barco desde Samaná. Se combina a menudo con las ballenas.' },
    tags: [{ fr: 'Bateau', en: 'Boat', es: 'Barco' }, { fr: 'Excursion', en: 'Day trip', es: 'Excursión' }],
    coords: { lat: 19.1667, lng: -69.2758 },
    query: 'Cayo Levantado, Samaná',
    photo: { uri: `${W}/2/23/Dominican_Republic_-_panoramio_%2822%29.jpg/960px-Dominican_Republic_-_panoramio_%2822%29.jpg`, credit: 'Максим Улитин', license: 'CC BY 3.0', page: 'https://commons.wikimedia.org/wiki/File:Dominican_Republic_-_panoramio_(22).jpg' },
  },
  {
    id: 'bonita',
    name: 'Playa Bonita',
    region: { fr: 'Las Terrenas', en: 'Las Terrenas', es: 'Las Terrenas' },
    text: { fr: 'Plage tranquille à l’ouest de Las Terrenas, avec de bonnes vagues pour débuter le surf.', en: 'Quiet beach west of Las Terrenas, with good waves for beginner surfers.', es: 'Playa tranquila al oeste de Las Terrenas, con buenas olas para iniciarse en el surf.' },
    tags: [{ fr: 'Surf', en: 'Surf', es: 'Surf' }, { fr: 'Calme', en: 'Calm', es: 'Tranquila' }],
    query: 'Playa Bonita, Las Terrenas',
    photo: { uri: `${W}/e/ed/DOM_Las_Terrenas%2C_Playa_Bonita_0022.jpg/960px-DOM_Las_Terrenas%2C_Playa_Bonita_0022.jpg`, credit: 'wuppertaler', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:DOM_Las_Terrenas,_Playa_Bonita_0022.jpg' },
  },
  {
    id: 'ballenas',
    name: 'Playa Las Ballenas',
    region: { fr: 'Las Terrenas', en: 'Las Terrenas', es: 'Las Terrenas' },
    text: { fr: 'Face à trois îlots qui font penser à des dos de baleines. À pied depuis le centre de Las Terrenas.', en: 'Facing three islets that look like whale backs. Walking distance from central Las Terrenas.', es: 'Frente a tres islotes que parecen lomos de ballena. A pie desde el centro de Las Terrenas.' },
    tags: [{ fr: 'Baignade', en: 'Swimming', es: 'Baño' }, { fr: 'Accessible', en: 'Easy access', es: 'Fácil acceso' }],
    query: 'Playa Las Ballenas, Las Terrenas',
    photo: { uri: `${W}/d/db/DOM_Las_Terrenas%2C_Playa_Las_Ballenas_0001.jpg/960px-DOM_Las_Terrenas%2C_Playa_Las_Ballenas_0001.jpg`, credit: 'wuppertaler', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:DOM_Las_Terrenas,_Playa_Las_Ballenas_0001.jpg' },
  },
  {
    id: 'sosua',
    name: 'Playa de Sosúa',
    region: { fr: 'Côte nord (Puerto Plata)', en: 'North coast (Puerto Plata)', es: 'Costa norte (Puerto Plata)' },
    text: { fr: 'Baie abritée à l’eau calme, pratique pour nager et faire du snorkeling.', en: 'Sheltered bay with calm water, good for swimming and snorkeling.', es: 'Bahía resguardada de agua tranquila, ideal para nadar y hacer snorkel.' },
    tags: [{ fr: 'Snorkeling', en: 'Snorkeling', es: 'Snorkel' }, { fr: 'Calme', en: 'Calm', es: 'Tranquila' }],
    coords: { lat: 19.75, lng: -70.52 },
    query: 'Playa Sosúa',
    photo: { uri: `${W}/7/79/Sosua_Beach_Dominican_Republic.jpg/960px-Sosua_Beach_Dominican_Republic.jpg`, credit: 'stupiddingo (Flickr)', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Sosua_Beach_Dominican_Republic.jpg' },
  },
  {
    id: 'cabarete',
    name: 'Cabarete',
    region: { fr: 'Côte nord (Puerto Plata)', en: 'North coast (Puerto Plata)', es: 'Costa norte (Puerto Plata)' },
    text: { fr: 'La plage des sports de glisse : kitesurf et windsurf, avec bars et restos les pieds dans le sable.', en: 'The board-sports beach: kitesurf and windsurf, with bars and restaurants on the sand.', es: 'La playa de los deportes de tabla: kitesurf y windsurf, con bares y restaurantes en la arena.' },
    tags: [{ fr: 'Kitesurf', en: 'Kitesurf', es: 'Kitesurf' }, { fr: 'Ambiance', en: 'Lively', es: 'Ambiente' }],
    coords: { lat: 19.7511, lng: -70.4083 },
    query: 'Playa Cabarete',
    photo: { uri: `${W}/3/36/Cabarete_Sosua_Dominican_Republic_People.jpg/960px-Cabarete_Sosua_Dominican_Republic_People.jpg`, credit: 'tavarez88 (Pixabay)', license: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Cabarete_Sosua_Dominican_Republic_People.jpg' },
  },
  {
    id: 'aguilas',
    name: 'Bahía de las Águilas',
    region: { fr: 'Sud-ouest (Pedernales)', en: 'Southwest (Pedernales)', es: 'Suroeste (Pedernales)' },
    text: { fr: 'Plage très isolée dans le parc national Jaragua. Aucun service sur place : emporte eau, nourriture et crème solaire.', en: 'Very remote beach in Jaragua National Park. No services: bring water, food and sunscreen.', es: 'Playa muy aislada en el Parque Nacional Jaragua. Sin servicios: lleva agua, comida y protector solar.' },
    tags: [{ fr: 'Sauvage', en: 'Wild', es: 'Salvaje' }, { fr: 'Aventure', en: 'Adventure', es: 'Aventura' }],
    coords: { lat: 17.8619, lng: -71.6456 },
    query: 'Bahía de las Águilas',
    photo: { uri: `${W}/5/5d/Bahia_de_las_Aguilas_Dominican_Republic.jpg/960px-Bahia_de_las_Aguilas_Dominican_Republic.jpg`, credit: 'jordina_collellcortacans (Flickr)', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Bahia_de_las_Aguilas_Dominican_Republic.jpg' },
  },
];

export function directionsUrl(b: Beach) {
  const dest = b.coords ? `${b.coords.lat},${b.coords.lng}` : `${b.query}, República Dominicana`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;
}
