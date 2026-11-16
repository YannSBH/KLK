// Plages : photos libres de droits (Wikimedia Commons), créditées dans l'app.

const W = 'https://thumb.wikimedia.org/wikipedia/commons/thumb';

export type Beach = {
  id: string;
  name: string;
  region: string;
  text: string;
  tags: string[];
  // Coordonnées si connues, sinon recherche par nom dans Maps.
  coords?: { lat: number; lng: number };
  query: string;
  photo: { uri: string; credit: string; license: string; page: string };
};

export const beaches: Beach[] = [
  {
    id: 'bavaro',
    name: 'Playa Bávaro',
    region: 'Punta Cana',
    text: 'Longue plage de sable blanc devant les hôtels, eau turquoise et plutôt calme.',
    tags: ['Baignade', 'Familles'],
    query: 'Playa Bávaro, Punta Cana',
    photo: { uri: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Bavaro.jpg', credit: 'Leridant', license: 'CC BY-SA 2.5', page: 'https://commons.wikimedia.org/wiki/File:Bavaro.jpg' },
  },
  {
    id: 'macao',
    name: 'Playa Macao',
    region: 'Punta Cana',
    text: 'Plage plus sauvage, avec des falaises et des vagues : un des spots de surf de la région.',
    tags: ['Surf', 'Sauvage'],
    coords: { lat: 18.7739, lng: -68.5371 },
    query: 'Playa Macao, Punta Cana',
    photo: { uri: `${W}/b/b4/Dominican_Republic_Landscape_Cliff.jpg/960px-Dominican_Republic_Landscape_Cliff.jpg`, credit: 'zuquirio (Flickr)', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Dominican_Republic_Landscape_Cliff.jpg' },
  },
  {
    id: 'saona',
    name: 'Isla Saona',
    region: 'Sud-est (parc national del Este)',
    text: 'Île de carte postale, accessible uniquement en bateau, en général lors d’une excursion d’une journée.',
    tags: ['Excursion', 'Bateau'],
    coords: { lat: 18.1556, lng: -68.6994 },
    query: 'Isla Saona',
    photo: { uri: `${W}/f/f0/Saona_Island_December_2020.jpg/960px-Saona_Island_December_2020.jpg`, credit: 'Danu Widjajanto', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Saona_Island_December_2020.jpg' },
  },
  {
    id: 'rincon',
    name: 'Playa Rincón',
    region: 'Samaná',
    text: 'Grande plage sauvage bordée de cocotiers, souvent citée parmi les plus belles des Caraïbes. Peu d’infrastructures : prévois de l’eau.',
    tags: ['Sauvage', 'Coup de cœur'],
    query: 'Playa Rincón, Samaná',
    photo: { uri: `${W}/c/cf/Playa_Rinc%C3%B3n_Dec_2020.jpg/960px-Playa_Rinc%C3%B3n_Dec_2020.jpg`, credit: 'Danu Widjajanto', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Playa_Rinc%C3%B3n_Dec_2020.jpg' },
  },
  {
    id: 'levantado',
    name: 'Cayo Levantado',
    region: 'Baie de Samaná',
    text: 'Petite île dans la baie, accessible en bateau depuis Samaná. Souvent combinée avec la sortie baleines.',
    tags: ['Bateau', 'Excursion'],
    coords: { lat: 19.1667, lng: -69.2758 },
    query: 'Cayo Levantado, Samaná',
    photo: { uri: `${W}/2/23/Dominican_Republic_-_panoramio_%2822%29.jpg/960px-Dominican_Republic_-_panoramio_%2822%29.jpg`, credit: 'Максим Улитин', license: 'CC BY 3.0', page: 'https://commons.wikimedia.org/wiki/File:Dominican_Republic_-_panoramio_(22).jpg' },
  },
  {
    id: 'bonita',
    name: 'Playa Bonita',
    region: 'Las Terrenas',
    text: 'Plage tranquille à l’ouest de Las Terrenas, avec de bonnes vagues pour débuter le surf.',
    tags: ['Surf', 'Calme'],
    query: 'Playa Bonita, Las Terrenas',
    photo: { uri: `${W}/e/ed/DOM_Las_Terrenas%2C_Playa_Bonita_0022.jpg/960px-DOM_Las_Terrenas%2C_Playa_Bonita_0022.jpg`, credit: 'wuppertaler', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:DOM_Las_Terrenas,_Playa_Bonita_0022.jpg' },
  },
  {
    id: 'ballenas',
    name: 'Playa Las Ballenas',
    region: 'Las Terrenas',
    text: 'Face à trois îlots qui font penser à des dos de baleines. À pied depuis le centre de Las Terrenas.',
    tags: ['Baignade', 'Accessible'],
    query: 'Playa Las Ballenas, Las Terrenas',
    photo: { uri: `${W}/d/db/DOM_Las_Terrenas%2C_Playa_Las_Ballenas_0001.jpg/960px-DOM_Las_Terrenas%2C_Playa_Las_Ballenas_0001.jpg`, credit: 'wuppertaler', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:DOM_Las_Terrenas,_Playa_Las_Ballenas_0001.jpg' },
  },
  {
    id: 'sosua',
    name: 'Playa de Sosúa',
    region: 'Côte nord (Puerto Plata)',
    text: 'Baie abritée à l’eau calme, pratique pour nager et faire du snorkeling.',
    tags: ['Snorkeling', 'Calme'],
    coords: { lat: 19.75, lng: -70.52 },
    query: 'Playa Sosúa',
    photo: { uri: `${W}/7/79/Sosua_Beach_Dominican_Republic.jpg/960px-Sosua_Beach_Dominican_Republic.jpg`, credit: 'stupiddingo (Flickr)', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Sosua_Beach_Dominican_Republic.jpg' },
  },
  {
    id: 'cabarete',
    name: 'Cabarete',
    region: 'Côte nord (Puerto Plata)',
    text: 'La plage des sports de glisse : kitesurf et windsurf, avec bars et restos les pieds dans le sable.',
    tags: ['Kitesurf', 'Ambiance'],
    coords: { lat: 19.7511, lng: -70.4083 },
    query: 'Playa Cabarete',
    photo: { uri: `${W}/3/36/Cabarete_Sosua_Dominican_Republic_People.jpg/960px-Cabarete_Sosua_Dominican_Republic_People.jpg`, credit: 'tavarez88 (Pixabay)', license: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Cabarete_Sosua_Dominican_Republic_People.jpg' },
  },
  {
    id: 'aguilas',
    name: 'Bahía de las Águilas',
    region: 'Sud-ouest (Pedernales)',
    text: 'Plage très isolée dans le parc national Jaragua. Aucun service sur place : emporte eau, nourriture et crème solaire.',
    tags: ['Sauvage', 'Aventure'],
    coords: { lat: 17.8619, lng: -71.6456 },
    query: 'Bahía de las Águilas',
    photo: { uri: `${W}/5/5d/Bahia_de_las_Aguilas_Dominican_Republic.jpg/960px-Bahia_de_las_Aguilas_Dominican_Republic.jpg`, credit: 'jordina_collellcortacans (Flickr)', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Bahia_de_las_Aguilas_Dominican_Republic.jpg' },
  },
];

export function directionsUrl(b: Beach) {
  const dest = b.coords ? `${b.coords.lat},${b.coords.lng}` : `${b.query}, República Dominicana`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;
}
