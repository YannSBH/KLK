// Hôtels tout compris, classés par prix d'appel.
// Prix « à partir de » par nuit relevés en 2026 (All-Inclusive Guide, mis à jour en juillet 2026 ;
// Islands.com, mars 2026). Ce sont des repères : ils changent beaucoup selon la saison et la chambre.
import type { T } from '../i18n';
import { beaches } from './beaches';
import { activityPhotos, orig, Photo, thumb } from './photos';

export type Audience = 'family' | 'adults';
export type Zone = 'bavaro' | 'puntacana' | 'uvero' | 'capcana' | 'bayahibe' | 'nord' | 'samana';
export type Hotel = { id: string; name: string; zone: Zone; audience?: Audience; from: number; photo?: Photo };

const beach = (id: string) => beaches.find((b) => b.id === id)!.photo;

export const zoneNames: Record<Zone, T> = {
  bavaro: { fr: 'Bávaro', en: 'Bávaro', es: 'Bávaro' },
  puntacana: { fr: 'Punta Cana', en: 'Punta Cana', es: 'Punta Cana' },
  uvero: { fr: 'Uvero Alto / Macao', en: 'Uvero Alto / Macao', es: 'Uvero Alto / Macao' },
  capcana: { fr: 'Cap Cana', en: 'Cap Cana', es: 'Cap Cana' },
  bayahibe: { fr: 'Bayahibe / La Romana', en: 'Bayahibe / La Romana', es: 'Bayahibe / La Romana' },
  nord: { fr: 'Côte nord (Puerto Plata)', en: 'North coast (Puerto Plata)', es: 'Costa norte (Puerto Plata)' },
  samana: { fr: 'Samaná', en: 'Samaná', es: 'Samaná' },
};

const puntaCana = thumb('d/d5/Punta_cana._-_panoramio.jpg', 'Punta_cana._-_panoramio.jpg', 'carlos adan', 'CC BY-SA 3.0');

// Photo de la plage de la zone quand on n'a pas de photo libre de l'hôtel lui-même.
export const zonePhotos: Record<Zone, Photo> = {
  bavaro: beach('bavaro'),
  puntacana: puntaCana,
  uvero: beach('macao'),
  capcana: puntaCana,
  bayahibe: activityPhotos.saona,
  nord: beach('sosua'),
  samana: beach('bonita'),
};

const hardRock = thumb('5/54/Hard_Rock_Hotel_Punta_Cana_-_garden_view.jpg', 'Hard_Rock_Hotel_Punta_Cana_-_garden_view.jpg', 'Angel Ramos G', 'CC BY 2.0');
const vivaDominicus = orig(
  'c/c3/Foto-hotel-resort-viva-dominicus-beach-santo-domingo-bayahibe-la-romana-caraibi-piscina.jpg',
  'Foto-hotel-resort-viva-dominicus-beach-santo-domingo-bayahibe-la-romana-caraibi-piscina.jpg',
  'Francopaolino1',
  'CC BY-SA 4.0',
);

export const hotels: Hotel[] = [
  { id: 'vivadominicus', name: 'Viva Dominicus Beach by Wyndham', zone: 'bayahibe', from: 100, photo: vivaDominicus },
  { id: 'vivatangerine', name: 'Viva Tangerine by Wyndham', zone: 'nord', from: 100 },
  { id: 'playabachata', name: 'PlayaBachata Spa Resort', zone: 'nord', from: 110 },
  { id: 'bpgrand', name: 'Bahia Principe Grand Punta Cana', zone: 'puntacana', audience: 'family', from: 125 },
  { id: 'riurepublica', name: 'Hotel Riu Republica', zone: 'puntacana', audience: 'adults', from: 125 },
  { id: 'sunscapedominicus', name: 'Sunscape Dominicus', zone: 'bayahibe', from: 130 },
  { id: 'riubambu', name: 'Hotel Riu Bambu', zone: 'puntacana', audience: 'family', from: 130 },
  { id: 'royaltonsplash', name: 'Royalton Splash Punta Cana', zone: 'puntacana', audience: 'family', from: 139 },
  { id: 'vivavsamana', name: 'Viva V Samaná by Wyndham', zone: 'samana', audience: 'adults', from: 139 },
  { id: 'barcelobavaro', name: 'Barceló Bávaro Palace', zone: 'bavaro', audience: 'family', from: 144 },
  { id: 'dreamsmacao', name: 'Dreams Macao Beach Punta Cana', zone: 'uvero', audience: 'family', from: 180 },
  { id: 'oceanblue', name: 'Ocean Blue & Sand', zone: 'bavaro', from: 183 },
  { id: 'clubmedpc', name: 'Club Med Punta Cana', zone: 'puntacana', audience: 'family', from: 187 },
  { id: 'iberostarselection', name: 'Iberostar Selection Bávaro Suites', zone: 'bavaro', audience: 'family', from: 194 },
  { id: 'grandbavaroprincess', name: 'Grand Bávaro Princess', zone: 'bavaro', from: 194 },
  { id: 'meliapc', name: 'Meliá Punta Cana Beach', zone: 'bavaro', from: 208 },
  { id: 'iberostardominicus', name: 'Iberostar Selection Hacienda Dominicus', zone: 'bayahibe', from: 220 },
  { id: 'bpambar', name: 'Bahia Principe Luxury Ambar', zone: 'bavaro', audience: 'adults', from: 241 },
  { id: 'breathless', name: 'Breathless Punta Cana', zone: 'puntacana', audience: 'adults', from: 250 },
  { id: 'excellencepc', name: 'Excellence Punta Cana', zone: 'uvero', audience: 'adults', from: 261 },
  { id: 'dreamsonyx', name: 'Dreams Onyx Resort & Spa', zone: 'puntacana', audience: 'family', from: 280 },
  { id: 'excellenceelcarmen', name: 'Excellence El Carmen', zone: 'uvero', audience: 'adults', from: 289 },
  { id: 'lopesan', name: 'Lopesan Costa Bávaro', zone: 'bavaro', audience: 'family', from: 300 },
  { id: 'hardrock', name: 'Hard Rock Hotel & Casino Punta Cana', zone: 'uvero', audience: 'family', from: 308, photo: hardRock },
  { id: 'joiabavaro', name: 'JOIA Bávaro by Iberostar', zone: 'bavaro', audience: 'adults', from: 310 },
  { id: 'zoetry', name: 'Zoetry Agua Punta Cana', zone: 'uvero', audience: 'adults', from: 350 },
  { id: 'iberostargrand', name: 'Iberostar Grand Bávaro', zone: 'bavaro', audience: 'adults', from: 365 },
  { id: 'nickelodeon', name: 'Nickelodeon Hotels & Resorts Punta Cana', zone: 'uvero', audience: 'family', from: 389 },
  { id: 'secretscapcana', name: 'Secrets Cap Cana', zone: 'capcana', audience: 'adults', from: 400 },
  { id: 'hyattziva', name: 'Hyatt Ziva Cap Cana', zone: 'capcana', audience: 'family', from: 425 },
  { id: 'hyattzilara', name: 'Hyatt Zilara Cap Cana', zone: 'capcana', audience: 'adults', from: 453 },
  { id: 'sanctuary', name: 'Sanctuary Cap Cana', zone: 'capcana', audience: 'adults', from: 525 },
  { id: 'moonpalace', name: 'Moon Palace The Grand – Punta Cana', zone: 'uvero', audience: 'family', from: 667 },
];

export const tiers: { id: string; label: T; min: number; max: number }[] = [
  { id: 'budget', label: { fr: 'Petit budget · moins de 150 $', en: 'Budget · under $150', es: 'Económico · menos de 150 $' }, min: 0, max: 149 },
  { id: 'value', label: { fr: 'Bon rapport qualité-prix · 150 à 249 $', en: 'Good value · $150–249', es: 'Buena relación calidad-precio · 150–249 $' }, min: 150, max: 249 },
  { id: 'upscale', label: { fr: 'Haut de gamme · 250 à 399 $', en: 'Upscale · $250–399', es: 'Alta gama · 250–399 $' }, min: 250, max: 399 },
  { id: 'luxury', label: { fr: 'Luxe · 400 $ et plus', en: 'Luxury · $400 and up', es: 'Lujo · 400 $ o más' }, min: 400, max: Infinity },
];

export const HOTELS_CHECKED: T = { fr: 'juillet 2026', en: 'July 2026', es: 'julio 2026' };
export const hotelUrl = (h: Hotel) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ', República Dominicana')}`;
