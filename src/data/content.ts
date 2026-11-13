// Contenu de KLK. Les prix sont indicatifs (relevés en novembre 2026) :
// ils servent de repère pour négocier, pas de tarif officiel.

export const PRICES_CHECKED = 'nov. 2026';

export type Route = {
  id: string;
  from: string;
  to: string;
  duration?: string;
  transfer: string;
  bus?: string;
  note?: string;
  keywords: string[];
};

export const routes: Route[] = [
  {
    id: 'sd-pc',
    from: 'Santo Domingo',
    to: 'Punta Cana (Bávaro)',
    duration: '≈ 2 h',
    transfer: '≈ 175 USD par véhicule (1 à 6 pers.), parfois ≈ 130 € selon l’agence',
    bus: 'Expreso Bávaro : ≈ 500 DOP (≈ 8 USD) par personne',
    note: 'Le bus part souvent complet : achète ton billet au moins 30 min avant.',
    keywords: ['santo domingo', 'punta cana', 'bavaro', 'bávaro', 'sdq', 'puj', 'aeroport'],
  },
  {
    id: 'sd-lt',
    from: 'Santo Domingo',
    to: 'Las Terrenas (Samaná)',
    duration: '≈ 2 h',
    transfer: '≈ 195 à 240 USD par véhicule (1 à 6 pers.)',
    bus: '≈ 340 DOP par personne (départ terminal ASOTRAPUSA)',
    note: 'En voiture, ≈ 978 DOP de péages à l’aller, en espèces et en petits billets.',
    keywords: ['santo domingo', 'las terrenas', 'samana', 'samaná', 'sdq'],
  },
  {
    id: 'pc-lt',
    from: 'Punta Cana (Bávaro)',
    to: 'Las Terrenas (Samaná)',
    transfer: '≈ 325 USD par véhicule (1 à 6 pers.)',
    keywords: ['punta cana', 'bavaro', 'bávaro', 'las terrenas', 'samana', 'samaná', 'puj'],
  },
];

export type Transport = { id: string; name: string; price: string; tip: string };

export const transports: Transport[] = [
  {
    id: 'uber',
    name: 'Uber',
    price: 'Prix affiché dans l’app',
    tip: 'Disponible dans la majeure partie de Punta Cana, mais pas à Uvero Alto, Miches ni (presque) à Macao. Depuis un resort, l’app propose parfois seulement Uber Select, bien plus cher.',
  },
  {
    id: 'taxi',
    name: 'Taxi',
    price: '≈ 20 USD minimum à Punta Cana, ≈ 25 USD pour une dizaine de km',
    tip: 'Pas de compteur : fixe toujours le prix avant de monter.',
  },
  {
    id: 'concho',
    name: 'Motoconcho (moto-taxi)',
    price: '≈ 2 à 4 USD le court trajet',
    tip: 'Négocie : 30 à 50 % de moins que le premier prix, c’est courant.',
  },
  {
    id: 'guagua',
    name: 'Guagua (minibus)',
    price: '≈ 75 à 85 DOP un trajet dans Bávaro / Punta Cana',
    tip: 'Le moins cher. Fais signe au bord de la route, paie le cobrador (le receveur).',
  },
  {
    id: 'bus',
    name: 'Bus longue distance',
    price: '≈ 4 à 5 € pour 100 km',
    tip: 'Expreso Bávaro, Caribe Tours… Confortables et climatisés : prends un pull !',
  },
  {
    id: 'tuktuk',
    name: 'Tuk-tuk',
    price: 'À négocier',
    tip: 'Dans certaines zones touristiques. Comme le motoconcho : prix fixé avant de partir.',
  },
];

export type Phrase = { es: string; fr: string };
export type PhraseGroup = { id: string; title: string; phrases: Phrase[] };

export const phraseGroups: PhraseGroup[] = [
  {
    id: 'transport',
    title: 'Taxi et transport',
    phrases: [
      { es: '¿Cuánto cuesta hasta …?', fr: 'Combien ça coûte jusqu’à … ?' },
      { es: 'Es muy caro.', fr: 'C’est trop cher.' },
      { es: '¿Me hace un mejor precio?', fr: 'Vous me faites un meilleur prix ?' },
      { es: 'Lléveme a esta dirección, por favor.', fr: 'Emmenez-moi à cette adresse, s’il vous plaît.' },
      { es: 'Pare aquí, por favor.', fr: 'Arrêtez-vous ici, s’il vous plaît.' },
      { es: '¿Acepta dólares?', fr: 'Vous acceptez les dollars ?' },
    ],
  },
  {
    id: 'shop',
    title: 'Resto et achats',
    phrases: [
      { es: '¿Cuánto es?', fr: 'C’est combien ?' },
      { es: 'La cuenta, por favor.', fr: 'L’addition, s’il vous plaît.' },
      { es: 'Sin hielo, por favor.', fr: 'Sans glaçons, s’il vous plaît.' },
      { es: '¿Qué me recomienda?', fr: 'Qu’est-ce que vous me conseillez ?' },
      { es: '¿Dónde hay un cajero?', fr: 'Où y a-t-il un distributeur ?' },
    ],
  },
  {
    id: 'basics',
    title: 'Les bases',
    phrases: [
      { es: 'No entiendo.', fr: 'Je ne comprends pas.' },
      { es: '¿Habla francés o inglés?', fr: 'Vous parlez français ou anglais ?' },
      { es: '¿Dónde está …?', fr: 'Où est … ?' },
      { es: 'Más despacio, por favor.', fr: 'Plus lentement, s’il vous plaît.' },
    ],
  },
  {
    id: 'help',
    title: 'Urgence',
    phrases: [
      { es: '¡Ayuda!', fr: 'À l’aide !' },
      { es: 'Llame a la policía, por favor.', fr: 'Appelez la police, s’il vous plaît.' },
      { es: 'Necesito un médico.', fr: 'J’ai besoin d’un médecin.' },
      { es: 'Me robaron.', fr: 'On m’a volé.' },
    ],
  },
  {
    id: 'dominicano',
    title: 'Parler comme un Dominicain',
    phrases: [
      { es: '¿Qué lo que? (KLK)', fr: 'Salut, ça dit quoi ?' },
      { es: '¡Hey, mi amor!', fr: 'Hé, mon cœur ! (s’utilise avec tout le monde)' },
      { es: '¿Y qué, corazón?', fr: 'Et alors, mon cœur ?' },
      { es: 'Tranquilo.', fr: 'Tranquille, pas de souci.' },
      { es: '¡Qué chévere!', fr: 'Trop bien !' },
      { es: 'Esa vaina…', fr: 'Ce truc… (mot à tout faire)' },
      { es: 'Dímelo.', fr: 'Dis-moi / Quoi de neuf ?' },
      { es: 'Ahorita', fr: 'Tout de suite… ou bien plus tard !' },
    ],
  },
];

export type Tip = { title: string; text: string };

export const scams: Tip[] = [
  {
    title: 'Le taxi sans prix fixé',
    text: 'Pas de compteur en Rép. Dom. : un prix non convenu se transforme souvent en mauvaise surprise. Annonce ta destination, demande le prix, puis monte.',
  },
  {
    title: 'Le faux site e-Ticket',
    text: 'Le formulaire d’entrée et de sortie est gratuit sur le site officiel. Les sites qui le font payer ne sont pas officiels.',
  },
  {
    title: 'Le change dans la rue',
    text: 'Change ton argent en banque ou en bureau de change, jamais avec quelqu’un qui t’aborde dans la rue.',
  },
  {
    title: 'Payer en dollars sans calculer',
    text: 'Un prix en dollars peut cacher un mauvais taux. Vérifie avec le convertisseur avant de payer.',
  },
  {
    title: 'Les rabatteurs',
    text: 'À l’aéroport ou sur la plage, des “guides” proposent excursions et transferts. Réserve plutôt via ton hôtel ou une agence reconnue.',
  },
  {
    title: 'Le pourboire en double',
    text: 'L’addition contient souvent déjà 10 % de service. Regarde le ticket avant d’ajouter un pourboire.',
  },
];

export const practical: Tip[] = [
  {
    title: 'E-Ticket obligatoire',
    text: 'Gratuit, à remplir pour l’arrivée et pour le départ. Faisable dès que tu as tes vols. Un formulaire pour 7 personnes maximum. Garde les QR codes en capture d’écran.',
  },
  {
    title: 'Taxe de sortie',
    text: '20 USD, déjà inclus dans ton billet d’avion. Au-delà de 30 jours de séjour, des frais de prolongation s’appliquent au départ.',
  },
  {
    title: 'Électricité',
    text: '110 V et prises américaines : prévois un adaptateur.',
  },
  {
    title: 'Eau',
    text: 'Ne bois pas l’eau du robinet. Eau en bouteille, même pour se brosser les dents si tu as l’estomac sensible.',
  },
  {
    title: 'Au resto',
    text: 'L’addition inclut en général 18 % de taxe (ITBIS) et 10 % de service.',
  },
  {
    title: 'Péages et argent liquide',
    text: 'Péages en espèces uniquement, en pesos et en petits billets. Retire de l’argent aux distributeurs situés dans les banques ou les centres commerciaux, de préférence en journée.',
  },
];

export const ETICKET_URL = 'https://eticket.migracion.gob.do';

export const emergencyNumbers = [
  { label: 'Urgences (police, ambulance, pompiers)', number: '911', main: true },
  { label: 'POLITUR, police touristique (ex-CESTUR)', number: '809-222-2026' },
  { label: 'POLITUR, 2e numéro', number: '809-200-3500' },
];
