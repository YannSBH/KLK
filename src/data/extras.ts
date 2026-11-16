// Prix courants, e-SIM et points de la carte (FR / EN / ES).
// Prix relevés en novembre 2026 (dominicanrepublic365, cana.tours, esim4, MICM pour l'essence) : ils bougent, ce sont des repères.
import type { T } from '../i18n';
import { dishes, orig, Photo, thumb } from './photos';

const same = (s: string): T => ({ fr: s, en: s, es: s });

export type PriceItem = { id: string; name: T; local: T; tourist?: T; note?: T; photo?: Photo; icon?: string };

export const priceItems: PriceItem[] = [
  {
    id: 'presidente',
    name: { fr: 'Bière Presidente (grande)', en: 'Presidente beer (large)', es: 'Cerveza Presidente (grande)' },
    photo: thumb('c/c5/Presidente-Bier.jpg', 'Presidente-Bier.jpg', 'Dr. Eugen Lehle', 'CC BY-SA 3.0'),
    local: { fr: '80 à 120 DOP au colmado', en: '80–120 DOP at a colmado', es: '80–120 DOP en el colmado' },
    tourist: { fr: '≈ 300 DOP (3 à 5 USD) au bar de plage', en: '≈ 300 DOP (3–5 USD) at a beach bar', es: '≈ 300 DOP (3–5 USD) en bar de playa' },
  },
  {
    id: 'water',
    name: { fr: 'Eau 1,5 L', en: 'Water 1.5 L', es: 'Agua 1,5 L' },
    icon: 'water-outline',
    local: { fr: '≈ 35 DOP', en: '≈ 35 DOP', es: '≈ 35 DOP' },
    note: { fr: 'Ne bois pas l’eau du robinet.', en: 'Don’t drink tap water.', es: 'No tomes agua del grifo.' },
  },
  {
    id: 'bandera',
    name: { fr: 'Plat du jour (la bandera)', en: 'Dish of the day (la bandera)', es: 'Plato del día (la bandera)' },
    photo: dishes.bandera.photo,
    local: { fr: '150 à 400 DOP au comedor', en: '150–400 DOP at a comedor', es: '150–400 DOP en un comedor' },
  },
  {
    id: 'empanada',
    name: same('Empanada'),
    photo: thumb('9/97/Empanada_-_Stu_Spivack.jpg', 'Empanada_-_Stu_Spivack.jpg', 'stu_spivack', 'CC BY-SA 2.0'),
    local: { fr: '25 à 100 DOP', en: '25–100 DOP', es: '25–100 DOP' },
  },
  {
    id: 'chimi',
    name: { fr: 'Chimi (burger de rue)', en: 'Chimi (street burger)', es: 'Chimi' },
    photo: thumb('7/71/Chimichurri_burger.jpg', 'Chimichurri_burger.jpg', 'LittleT889', 'CC BY-SA 4.0'),
    local: { fr: '100 à 200 DOP', en: '100–200 DOP', es: '100–200 DOP' },
  },
  {
    id: 'coffee',
    name: { fr: 'Café', en: 'Coffee', es: 'Café' },
    icon: 'cafe-outline',
    local: { fr: '≈ 120 DOP le café + 2 empanadas', en: '≈ 120 DOP for coffee + 2 empanadas', es: '≈ 120 DOP café + 2 empanadas' },
    tourist: { fr: '1,50 à 3 USD en café', en: '1.50–3 USD in a café', es: '1,50–3 USD en cafetería' },
  },
  {
    id: 'fruit',
    name: { fr: 'Sachet de fruits coupés', en: 'Bag of cut fruit', es: 'Funda de frutas picadas' },
    photo: thumb('a/ae/Obstverk%C3%A4ufer_am_Strand.jpg', 'Obstverkäufer_am_Strand.jpg', 'Dr. Eugen Lehle', 'CC BY-SA 3.0'),
    local: { fr: '50 à 100 DOP', en: '50–100 DOP', es: '50–100 DOP' },
  },
  {
    id: 'rum',
    name: { fr: 'Rhum Brugal Añejo', en: 'Brugal Añejo rum', es: 'Ron Brugal Añejo' },
    icon: 'wine-outline',
    local: { fr: '≈ 450 DOP la bouteille', en: '≈ 450 DOP a bottle', es: '≈ 450 DOP la botella' },
    tourist: { fr: '250 à 400 DOP le verre au bar', en: '250–400 DOP a glass at a bar', es: '250–400 DOP el trago en bar' },
  },
  {
    id: 'mamajuana',
    name: { fr: 'Mamajuana (75 cl)', en: 'Mamajuana (750 ml)', es: 'Mamajuana (750 ml)' },
    photo: orig(
      '7/75/Candela_Mamajuana_bottle_in_Punta_Cana%2C_Dominican_Republic.jpg',
      'Candela_Mamajuana_bottle_in_Punta_Cana,_Dominican_Republic.jpg',
      'Russoale',
      'CC BY-SA 4.0',
    ),
    local: { fr: '8 à 20 USD', en: '8–20 USD', es: '8–20 USD' },
  },
  {
    id: 'guagua',
    name: { fr: 'Trajet en guagua (en ville)', en: 'Guagua ride (in town)', es: 'Pasaje de guagua (en la ciudad)' },
    icon: 'bus-outline',
    local: { fr: '25 à 50 DOP', en: '25–50 DOP', es: '25–50 DOP' },
  },
  {
    id: 'moto',
    name: { fr: 'Motoconcho (court trajet)', en: 'Motoconcho (short ride)', es: 'Motoconcho (trayecto corto)' },
    icon: 'bicycle-outline',
    local: { fr: '25 à 75 DOP', en: '25–75 DOP', es: '25–75 DOP' },
    note: { fr: 'Fixe le prix avant de monter.', en: 'Agree on the price first.', es: 'Acuerda el precio antes.' },
  },
  {
    id: 'gas',
    name: { fr: 'Essence (le gallon, 3,8 L)', en: 'Gasoline (per gallon)', es: 'Gasolina (por galón)' },
    icon: 'speedometer-outline',
    local: { fr: 'Régulière 317,50 DOP · Premium 362,10 DOP', en: 'Regular 317.50 DOP · Premium 362.10 DOP', es: 'Regular 317,50 DOP · Premium 362,10 DOP' },
    note: { fr: 'Prix officiel du 7 au 13 nov. 2026, revu chaque semaine.', en: 'Official price for Nov. 7–13, 2026, revised weekly.', es: 'Precio oficial del 7 al 13 de nov. 2026, se revisa cada semana.' },
  },
];

export const PRICES_TAX_NOTE: T = {
  fr: 'Au resto (hors resorts), la carte n’inclut souvent pas les 18 % d’ITBIS (TVA) ni les 10 % de service : compte environ 28 % de plus.',
  en: 'In restaurants (outside resorts), menus often exclude 18% ITBIS (sales tax) and the 10% service charge: add about 28%.',
  es: 'En restaurantes (fuera de resorts), el menú a menudo no incluye el 18 % de ITBIS ni el 10 % de servicio: suma cerca de un 28 %.',
};

export type EsimProvider = { id: string; name: string; url: string; network?: string; plans: { data: string; days: number; usd: number }[]; note?: T };

// data: "1 GB", "∞" = illimité
export const esimProviders: EsimProvider[] = [
  {
    id: 'nomad', name: 'Nomad', url: 'https://www.getnomad.app',
    plans: [{ data: '5 GB', days: 30, usd: 21 }, { data: '10 GB', days: 30, usd: 25 }, { data: '20 GB', days: 30, usd: 29 }],
    note: { fr: 'Le moins cher au Go relevé.', en: 'Cheapest per GB we found.', es: 'El más barato por GB que encontramos.' },
  },
  {
    id: 'airalo', name: 'Airalo', url: 'https://www.airalo.com', network: 'Claro',
    plans: [{ data: '1 GB', days: 3, usd: 6 }, { data: '5 GB', days: 30, usd: 26 }, { data: '10 GB', days: 30, usd: 37 }],
    note: { fr: 'Petit forfait d’arrivée à 6 USD.', en: 'Small 6 USD arrival plan.', es: 'Plan pequeño de llegada a 6 USD.' },
  },
  {
    id: 'saily', name: 'Saily', url: 'https://saily.com',
    plans: [{ data: '1 GB', days: 7, usd: 8.49 }, { data: '5 GB', days: 30, usd: 26.99 }, { data: '10 GB', days: 30, usd: 37.99 }],
  },
  {
    id: 'alosim', name: 'aloSIM', url: 'https://www.alosim.com',
    plans: [{ data: '5 GB', days: 30, usd: 26 }, { data: '10 GB', days: 30, usd: 32 }],
  },
  {
    id: 'gigsky', name: 'GigSky', url: 'https://www.gigsky.com',
    plans: [{ data: '∞', days: 7, usd: 23.19 }, { data: '∞', days: 14, usd: 32.99 }],
    note: { fr: 'Illimité le moins cher relevé.', en: 'Cheapest unlimited plan we found.', es: 'El ilimitado más barato que encontramos.' },
  },
  {
    id: 'holafly', name: 'Holafly', url: 'https://esim.holafly.com',
    plans: [{ data: '∞', days: 7, usd: 37 }, { data: '∞', days: 15, usd: 59 }],
    note: { fr: 'Prix 2025, à vérifier.', en: '2025 prices, check before buying.', es: 'Precios de 2025, verifícalos.' },
  },
];

export const ESIM_CHECKED: T = { fr: 'juillet 2026', en: 'July 2026', es: 'julio 2026' };

export const localSimTips: T[] = [
  {
    fr: 'Pas de comptoir SIM à l’aéroport de Punta Cana : il faut aller en boutique Claro ou Altice (ex. BlueMall Punta Cana).',
    en: 'No SIM counter at Punta Cana airport: go to a Claro or Altice store (e.g. BlueMall Punta Cana).',
    es: 'No hay mostrador de SIM en el aeropuerto de Punta Cana: ve a una tienda Claro o Altice (ej. BlueMall Punta Cana).',
  },
  {
    fr: 'La puce Claro coûte environ 100 DOP, plus un forfait de données. Passeport obligatoire.',
    en: 'A Claro SIM costs about 100 DOP, plus a data bundle. Passport required.',
    es: 'El chip Claro cuesta unos 100 DOP, más un paquete de datos. Se pide pasaporte.',
  },
  {
    fr: 'Moins cher pour un long séjour, mais il faut un téléphone désimlocké et un passage en boutique.',
    en: 'Cheaper for long stays, but you need an unlocked phone and a store visit.',
    es: 'Más barato para estancias largas, pero necesitas un teléfono liberado y pasar por la tienda.',
  },
];

export const esimTips: T[] = [
  {
    fr: 'Installe l’e-SIM chez toi avec le Wi-Fi, et active-la à l’atterrissage (itinérance des données activée sur la ligne e-SIM).',
    en: 'Install the eSIM at home on Wi-Fi, and switch it on when you land (data roaming on for the eSIM line).',
    es: 'Instala la eSIM en casa con Wi-Fi y actívala al aterrizar (itinerancia de datos activada en la línea eSIM).',
  },
  {
    fr: 'Les e-SIM « data » n’ont pas de numéro local : WhatsApp marche, les SMS dominicains non.',
    en: 'Data eSIMs have no local number: WhatsApp works, Dominican SMS don’t.',
    es: 'Las eSIM de datos no tienen número local: WhatsApp funciona, los SMS dominicanos no.',
  },
  {
    fr: 'Pense à couper l’itinérance de ta ligne habituelle pour éviter une grosse facture.',
    en: 'Turn off roaming on your usual line to avoid a big bill.',
    es: 'Desactiva la itinerancia de tu línea habitual para evitar una factura alta.',
  },
];

export type MapPoint = { id: string; name: string; kind: 'beach' | 'airport' | 'sight'; lat: number; lng: number };

export const mapPoints: MapPoint[] = [
  { id: 'puj', name: 'Aeropuerto Punta Cana (PUJ)', kind: 'airport', lat: 18.5667, lng: -68.3519 },
  { id: 'sdq', name: 'Aeropuerto Las Américas (SDQ)', kind: 'airport', lat: 18.4294, lng: -69.6689 },
  { id: 'pop', name: 'Aeropuerto Puerto Plata (POP)', kind: 'airport', lat: 19.7578, lng: -70.57 },
  { id: 'azs', name: 'Aeropuerto El Catey – Samaná (AZS)', kind: 'airport', lat: 19.27, lng: -69.7375 },
  { id: 'zona', name: 'Zona Colonial, Santo Domingo', kind: 'sight', lat: 18.4833, lng: -69.9167 },
  { id: 'lt', name: 'Las Terrenas', kind: 'sight', lat: 19.32, lng: -69.53 },
  { id: 'bavaro', name: 'Bávaro', kind: 'sight', lat: 18.7167, lng: -68.45 },
  { id: 'rincon', name: 'Playa Rincón', kind: 'beach', lat: 19.2883, lng: -69.2483 },
  { id: 'juanillo', name: 'Playa Juanillo (Cap Cana)', kind: 'beach', lat: 18.497, lng: -68.3895 },
  { id: 'macao', name: 'Playa Macao', kind: 'beach', lat: 18.7739, lng: -68.5371 },
  { id: 'saona', name: 'Isla Saona', kind: 'beach', lat: 18.1556, lng: -68.6994 },
  { id: 'levantado', name: 'Cayo Levantado', kind: 'beach', lat: 19.1667, lng: -69.2758 },
  { id: 'sosua', name: 'Playa de Sosúa', kind: 'beach', lat: 19.75, lng: -70.52 },
  { id: 'cabarete', name: 'Cabarete', kind: 'beach', lat: 19.7511, lng: -70.4083 },
  { id: 'aguilas', name: 'Bahía de las Águilas', kind: 'beach', lat: 17.8619, lng: -71.6456 },
];

export const nearbySearches: { id: string; key: 'atm' | 'pharmacy' | 'gas' | 'supermarket' | 'hospital' | 'colmado'; icon: string; q: string }[] = [
  { id: 'atm', key: 'atm', icon: 'cash-outline', q: 'cajero automático' },
  { id: 'pharmacy', key: 'pharmacy', icon: 'medkit-outline', q: 'farmacia' },
  { id: 'gas', key: 'gas', icon: 'speedometer-outline', q: 'gasolinera' },
  { id: 'supermarket', key: 'supermarket', icon: 'cart-outline', q: 'supermercado' },
  { id: 'hospital', key: 'hospital', icon: 'medical-outline', q: 'clínica' },
  { id: 'colmado', key: 'colmado', icon: 'storefront-outline', q: 'colmado' },
];

export const nearbyUrl = (q: string) => `https://www.google.com/maps/search/${encodeURIComponent(q)}/`;
export const pointUrl = (p: MapPoint) => `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;
