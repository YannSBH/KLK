// Contenu de KLK en FR / EN / ES. Les prix sont indicatifs (relevés en novembre 2026) :
// ils servent de repère pour négocier, pas de tarif officiel.
import type { T } from '../i18n';

export const PRICES_CHECKED: T = { fr: 'nov. 2026', en: 'Nov. 2026', es: 'nov. 2026' };

export type Route = {
  id: string;
  from: string;
  to: string;
  duration?: string;
  transfer: T;
  bus?: T;
  note?: T;
  keywords: string[];
  driverTo: string; // destination dite au chauffeur
};
export type RouteGroup = { id: string; title: T; routes: Route[] };

const veh = (p: string): T => ({ fr: `${p} par véhicule`, en: `${p} per vehicle`, es: `${p} por vehículo` });
const taxi = (p: string): T => ({ fr: `Taxi : ${p}`, en: `Taxi: ${p}`, es: `Taxi: ${p}` });

export const routeGroups: RouteGroup[] = [
  {
    id: 'puj',
    title: { fr: 'Depuis l’aéroport de Punta Cana (PUJ)', en: 'From Punta Cana airport (PUJ)', es: 'Desde el aeropuerto de Punta Cana (PUJ)' },
    routes: [
      { id: 'puj-bav', from: 'PUJ', to: 'Bávaro (Barceló, Meliá, Lopesan)', transfer: taxi('≈ 30 USD'), keywords: ['puj', 'bavaro', 'bávaro', 'aeroport', 'airport'], driverTo: 'Bávaro' },
      { id: 'puj-bav2', from: 'PUJ', to: 'Bávaro (RIU, Iberostar, Bahía Príncipe)', transfer: taxi('≈ 40 USD'), keywords: ['puj', 'bavaro', 'riu', 'iberostar'], driverTo: 'Bávaro' },
      { id: 'puj-cap', from: 'PUJ', to: 'Cap Cana', transfer: taxi('≈ 30 USD'), keywords: ['puj', 'cap cana', 'juanillo'], driverTo: 'Cap Cana' },
      { id: 'puj-mac', from: 'PUJ', to: 'Macao', transfer: { fr: 'Taxi : ≈ 60 USD (transfert réservé : 40 à 45 USD)', en: 'Taxi: ≈ 60 USD (pre-booked transfer: 40–45 USD)', es: 'Taxi: ≈ 60 USD (traslado reservado: 40–45 USD)' }, keywords: ['puj', 'macao'], driverTo: 'Macao' },
      { id: 'puj-uve', from: 'PUJ', to: 'Uvero Alto', transfer: taxi('≈ 70 USD'), keywords: ['puj', 'uvero alto'], driverTo: 'Uvero Alto' },
      { id: 'puj-bay', from: 'PUJ', to: 'Bayahibe / Dominicus', transfer: veh('≈ 80 à 120 USD'), keywords: ['puj', 'bayahibe', 'dominicus', 'saona'], driverTo: 'Bayahibe' },
      { id: 'puj-lr', from: 'PUJ', to: 'La Romana', transfer: veh('≈ 100 à 120 USD'), keywords: ['puj', 'la romana', 'casa de campo'], driverTo: 'La Romana' },
      { id: 'puj-mic', from: 'PUJ', to: 'Miches', transfer: veh('≈ 120 à 150 USD'), keywords: ['puj', 'miches'], driverTo: 'Miches' },
      { id: 'puj-sd', from: 'PUJ', to: 'Santo Domingo', transfer: veh('≈ 150 à 200 USD'), keywords: ['puj', 'santo domingo'], driverTo: 'Santo Domingo' },
      { id: 'puj-sam', from: 'PUJ', to: 'Samaná', transfer: veh('≈ 300 à 400 USD'), keywords: ['puj', 'samana', 'samaná'], driverTo: 'Samaná' },
    ],
  },
  {
    id: 'sdq',
    title: { fr: 'Depuis l’aéroport de Santo Domingo (SDQ)', en: 'From Santo Domingo airport (SDQ)', es: 'Desde el aeropuerto de Santo Domingo (SDQ)' },
    routes: [
      {
        id: 'sdq-zc',
        from: 'SDQ',
        to: 'Zona Colonial / centre',
        transfer: { fr: 'Taxi officiel : ≈ 35 à 45 USD', en: 'Official taxi: ≈ 35–45 USD', es: 'Taxi oficial: ≈ 35–45 USD' },
        note: { fr: 'Uber : souvent ≈ 15 à 25 USD.', en: 'Uber: often ≈ 15–25 USD.', es: 'Uber: a menudo ≈ 15–25 USD.' },
        keywords: ['sdq', 'santo domingo', 'zona colonial', 'aeroport', 'airport'],
        driverTo: 'la Zona Colonial',
      },
    ],
  },
  {
    id: 'pop',
    title: { fr: 'Depuis l’aéroport de Puerto Plata (POP)', en: 'From Puerto Plata airport (POP)', es: 'Desde el aeropuerto de Puerto Plata (POP)' },
    routes: [
      { id: 'pop-cab', from: 'POP', to: 'Cabarete', transfer: taxi('≈ 35 USD'), keywords: ['pop', 'puerto plata', 'cabarete'], driverTo: 'Cabarete' },
      { id: 'pop-pp', from: 'POP', to: 'Puerto Plata (ville, Playa Dorada)', transfer: taxi('≈ 35 USD'), keywords: ['pop', 'puerto plata', 'playa dorada'], driverTo: 'Puerto Plata' },
    ],
  },
  {
    id: 'azs',
    title: { fr: 'Depuis l’aéroport de Samaná El Catey (AZS)', en: 'From Samaná El Catey airport (AZS)', es: 'Desde el aeropuerto Samaná El Catey (AZS)' },
    routes: [
      { id: 'azs-lt', from: 'AZS', to: 'Las Terrenas', transfer: { fr: '≈ 95 USD par véhicule (1 à 7 pers.)', en: '≈ 95 USD per vehicle (1–7 people)', es: '≈ 95 USD por vehículo (1–7 personas)' }, keywords: ['azs', 'el catey', 'samana', 'las terrenas'], driverTo: 'Las Terrenas' },
    ],
  },
  {
    id: 'cities',
    title: { fr: 'Entre les villes', en: 'Between cities', es: 'Entre ciudades' },
    routes: [
      {
        id: 'sd-pc',
        from: 'Santo Domingo',
        to: 'Punta Cana (Bávaro)',
        duration: '≈ 2 h',
        transfer: {
          fr: '≈ 175 USD par véhicule (1 à 6 pers.), parfois ≈ 130 € selon l’agence',
          en: '≈ 175 USD per vehicle (1–6 people), sometimes ≈ 130 € depending on the agency',
          es: '≈ 175 USD por vehículo (1–6 personas), a veces ≈ 130 € según la agencia',
        },
        bus: { fr: 'Expreso Bávaro : ≈ 500 DOP (≈ 8 USD) par personne', en: 'Expreso Bávaro bus: ≈ 500 DOP (≈ 8 USD) per person', es: 'Expreso Bávaro: ≈ 500 DOP (≈ 8 USD) por persona' },
        note: {
          fr: 'Le bus part souvent complet : achète ton billet au moins 30 min avant.',
          en: 'The bus often fills up: buy your ticket at least 30 min ahead.',
          es: 'El autobús suele llenarse: compra el boleto al menos 30 min antes.',
        },
        keywords: ['santo domingo', 'punta cana', 'bavaro', 'bávaro'],
        driverTo: 'Punta Cana',
      },
      {
        id: 'sd-lt',
        from: 'Santo Domingo',
        to: 'Las Terrenas (Samaná)',
        duration: '≈ 2 h',
        transfer: { fr: '≈ 195 à 240 USD par véhicule (1 à 6 pers.)', en: '≈ 195–240 USD per vehicle (1–6 people)', es: '≈ 195–240 USD por vehículo (1–6 personas)' },
        bus: { fr: '≈ 340 DOP par personne (terminal ASOTRAPUSA)', en: '≈ 340 DOP per person (ASOTRAPUSA terminal)', es: '≈ 340 DOP por persona (terminal ASOTRAPUSA)' },
        note: {
          fr: 'En voiture, ≈ 978 DOP de péages à l’aller, en espèces et en petits billets.',
          en: 'By car, ≈ 978 DOP in tolls one way, in cash and small bills.',
          es: 'En carro, ≈ 978 DOP de peajes de ida, en efectivo y billetes pequeños.',
        },
        keywords: ['santo domingo', 'las terrenas', 'samana', 'samaná'],
        driverTo: 'Las Terrenas',
      },
      {
        id: 'pc-lt',
        from: 'Punta Cana (Bávaro)',
        to: 'Las Terrenas (Samaná)',
        transfer: { fr: '≈ 325 USD par véhicule (1 à 6 pers.)', en: '≈ 325 USD per vehicle (1–6 people)', es: '≈ 325 USD por vehículo (1–6 personas)' },
        keywords: ['punta cana', 'bavaro', 'bávaro', 'las terrenas', 'samana'],
        driverTo: 'Las Terrenas',
      },
      {
        id: 'sd-stg',
        from: 'Santo Domingo',
        to: 'Santiago',
        duration: '≈ 2 h 30',
        transfer: { fr: 'Guagua : ≈ 350 DOP (≈ 6 USD) par personne', en: 'Guagua (minibus): ≈ 350 DOP (≈ 6 USD) per person', es: 'Guagua: ≈ 350 DOP (≈ 6 USD) por persona' },
        keywords: ['santo domingo', 'santiago'],
        driverTo: 'Santiago',
      },
    ],
  },
];

export const routes: Route[] = routeGroups.flatMap((g) => g.routes);

export type Transport = { id: string; name: T; price: T; tip: T };

export const transports: Transport[] = [
  {
    id: 'uber',
    name: { fr: 'Uber', en: 'Uber', es: 'Uber' },
    price: { fr: 'Prix affiché dans l’app', en: 'Price shown in the app', es: 'Precio en la app' },
    tip: {
      fr: 'Disponible dans la majeure partie de Punta Cana, mais pas à Uvero Alto, Miches ni (presque) à Macao. Depuis un resort, l’app propose parfois seulement Uber Select, bien plus cher.',
      en: 'Available in most of Punta Cana, but not in Uvero Alto, Miches or (mostly) Macao. From resorts the app sometimes only offers the pricier Uber Select.',
      es: 'Disponible en casi todo Punta Cana, pero no en Uvero Alto, Miches ni (casi) en Macao. Desde los resorts a veces solo sale Uber Select, más caro.',
    },
  },
  {
    id: 'taxi',
    name: { fr: 'Taxi', en: 'Taxi', es: 'Taxi' },
    price: { fr: '≈ 20 USD minimum à Punta Cana, ≈ 25 USD pour une dizaine de km', en: '≈ 20 USD minimum in Punta Cana, ≈ 25 USD for about 10 km', es: '≈ 20 USD mínimo en Punta Cana, ≈ 25 USD por unos 10 km' },
    tip: { fr: 'Pas de compteur : fixe toujours le prix avant de monter.', en: 'No meters: always agree on the fare before getting in.', es: 'No hay taxímetro: acuerda siempre el precio antes de subir.' },
  },
  {
    id: 'concho',
    name: { fr: 'Motoconcho (moto-taxi)', en: 'Motoconcho (motorbike taxi)', es: 'Motoconcho' },
    price: { fr: '≈ 25 à 75 DOP en ville, ≈ 2 à 4 USD en zone touristique', en: '≈ 25–75 DOP in town, ≈ 2–4 USD in tourist areas', es: '≈ 25–75 DOP en la ciudad, ≈ 2–4 USD en zona turística' },
    tip: { fr: 'Négocie : 30 à 50 % de moins que le premier prix, c’est courant.', en: 'Haggle: 30–50% below the first price is normal.', es: 'Negocia: 30–50 % menos que el primer precio es normal.' },
  },
  {
    id: 'guagua',
    name: { fr: 'Guagua (minibus)', en: 'Guagua (minibus)', es: 'Guagua' },
    price: { fr: '≈ 25 à 85 DOP le trajet selon la ville', en: '≈ 25–85 DOP per ride depending on the city', es: '≈ 25–85 DOP el viaje según la ciudad' },
    tip: {
      fr: 'Le moins cher. Fais signe au bord de la route, paie le cobrador (le receveur).',
      en: 'The cheapest option. Wave from the roadside and pay the cobrador (fare collector).',
      es: 'Lo más barato. Haz señas en la carretera y paga al cobrador.',
    },
  },
  {
    id: 'bus',
    name: { fr: 'Bus longue distance', en: 'Long-distance bus', es: 'Autobús de larga distancia' },
    price: { fr: '≈ 4 à 5 € pour 100 km', en: '≈ 4–5 € per 100 km', es: '≈ 4–5 € por 100 km' },
    tip: {
      fr: 'Expreso Bávaro, Caribe Tours… Confortables et climatisés : prends un pull !',
      en: 'Expreso Bávaro, Caribe Tours… Comfortable and air-conditioned: bring a sweater!',
      es: 'Expreso Bávaro, Caribe Tours… Cómodos y con aire acondicionado: ¡lleva un abrigo!',
    },
  },
  {
    id: 'tuktuk',
    name: { fr: 'Tuk-tuk', en: 'Tuk-tuk', es: 'Tuk-tuk' },
    price: { fr: 'À négocier', en: 'Negotiable', es: 'A negociar' },
    tip: {
      fr: 'Dans certaines zones touristiques. Comme le motoconcho : prix fixé avant de partir.',
      en: 'In some tourist areas. Like motoconchos: agree on the price first.',
      es: 'En algunas zonas turísticas. Como el motoconcho: precio antes de salir.',
    },
  },
];

/** es = phrase en espagnol ; m = sens dans la langue de l’utilisateur. */
export type Phrase = { es: string; m: T };
export type PhraseGroup = { id: string; title: T; phrases: Phrase[] };

const p = (es: string, fr: string, en: string, esMeaning?: string): Phrase => ({ es, m: { fr, en, es: esMeaning ?? es } });

export const phraseGroups: PhraseGroup[] = [
  {
    id: 'transport',
    title: { fr: 'Taxi et transport', en: 'Taxi and transport', es: 'Taxi y transporte' },
    phrases: [
      p('¿Cuánto cuesta hasta …?', 'Combien ça coûte jusqu’à … ?', 'How much to …?'),
      p('Es muy caro.', 'C’est trop cher.', 'That’s too expensive.'),
      p('¿Me hace un mejor precio?', 'Vous me faites un meilleur prix ?', 'Can you give me a better price?'),
      p('Lléveme a esta dirección, por favor.', 'Emmenez-moi à cette adresse, s’il vous plaît.', 'Take me to this address, please.'),
      p('Pare aquí, por favor.', 'Arrêtez-vous ici, s’il vous plaît.', 'Stop here, please.'),
      p('¿Acepta dólares?', 'Vous acceptez les dollars ?', 'Do you take dollars?'),
    ],
  },
  {
    id: 'shop',
    title: { fr: 'Resto et achats', en: 'Food and shopping', es: 'Comida y compras' },
    phrases: [
      p('¿Cuánto es?', 'C’est combien ?', 'How much is it?'),
      p('La cuenta, por favor.', 'L’addition, s’il vous plaît.', 'The check, please.'),
      p('Sin hielo, por favor.', 'Sans glaçons, s’il vous plaît.', 'No ice, please.'),
      p('¿Qué me recomienda?', 'Qu’est-ce que vous me conseillez ?', 'What do you recommend?'),
      p('¿Dónde hay un cajero?', 'Où y a-t-il un distributeur ?', 'Where is an ATM?'),
    ],
  },
  {
    id: 'basics',
    title: { fr: 'Les bases', en: 'The basics', es: 'Lo básico' },
    phrases: [
      p('No entiendo.', 'Je ne comprends pas.', 'I don’t understand.'),
      p('¿Habla francés o inglés?', 'Vous parlez français ou anglais ?', 'Do you speak English or French?'),
      p('¿Dónde está …?', 'Où est … ?', 'Where is …?'),
      p('Más despacio, por favor.', 'Plus lentement, s’il vous plaît.', 'Slower, please.'),
    ],
  },
  {
    id: 'help',
    title: { fr: 'Urgence', en: 'Emergency', es: 'Emergencia' },
    phrases: [
      p('¡Ayuda!', 'À l’aide !', 'Help!'),
      p('Llame a la policía, por favor.', 'Appelez la police, s’il vous plaît.', 'Call the police, please.'),
      p('Necesito un médico.', 'J’ai besoin d’un médecin.', 'I need a doctor.'),
      p('Me robaron.', 'On m’a volé.', 'I’ve been robbed.'),
    ],
  },
  {
    id: 'dominicano',
    title: { fr: 'Parler comme un Dominicain', en: 'Talk like a Dominican', es: 'Habla como dominicano' },
    phrases: [
      p('¿Qué lo que? (KLK)', 'Salut, ça dit quoi ?', 'Hey, what’s up?', '¿Qué hay? (saludo)'),
      p('¡Hey, mi amor!', 'Hé, mon cœur ! (s’utilise avec tout le monde)', 'Hey, my love! (used with everyone)', 'Saludo cariñoso, se usa con todos'),
      p('¿Y qué, corazón?', 'Et alors, mon cœur ?', 'So, sweetheart?', 'Saludo cariñoso'),
      p('Tranquilo.', 'Tranquille, pas de souci.', 'Chill, no worries.', 'Sin problema'),
      p('¡Qué chévere!', 'Trop bien !', 'So cool!', '¡Qué bueno!'),
      p('Esa vaina…', 'Ce truc… (mot à tout faire)', 'That thing… (all-purpose word)', 'Esa cosa (palabra comodín)'),
      p('Dímelo.', 'Dis-moi / Quoi de neuf ?', 'Tell me / What’s up?', 'Saludo: ¿qué hay?'),
      p('Ahorita', 'Tout de suite… ou bien plus tard !', 'Right now… or much later!', 'Ahora… o mucho más tarde'),
    ],
  },
];

export type Tip = { title: T; text: T };

export const scams: Tip[] = [
  {
    title: { fr: 'Le taxi sans prix fixé', en: 'The taxi with no agreed price', es: 'El taxi sin precio acordado' },
    text: {
      fr: 'Pas de compteur en Rép. Dom. : un prix non convenu se transforme souvent en mauvaise surprise. Annonce ta destination, demande le prix, puis monte.',
      en: 'There are no meters in the D.R.: an unagreed fare often turns into a nasty surprise. Say where you’re going, ask the price, then get in.',
      es: 'No hay taxímetro: un precio sin acordar suele terminar en sorpresa. Di tu destino, pregunta el precio y luego sube.',
    },
  },
  {
    title: { fr: 'Le faux site e-Ticket', en: 'The fake e-Ticket website', es: 'El falso sitio de e-Ticket' },
    text: {
      fr: 'Le formulaire d’entrée et de sortie est gratuit sur le site officiel. Les sites qui le font payer ne sont pas officiels.',
      en: 'The entry and exit form is free on the official site. Sites that charge for it are not official.',
      es: 'El formulario de entrada y salida es gratis en el sitio oficial. Los sitios que cobran no son oficiales.',
    },
  },
  {
    title: { fr: 'Le change dans la rue', en: 'Street money changers', es: 'Cambio en la calle' },
    text: {
      fr: 'Change ton argent en banque ou en bureau de change, jamais avec quelqu’un qui t’aborde dans la rue.',
      en: 'Change money at a bank or exchange office, never with someone who approaches you in the street.',
      es: 'Cambia dinero en un banco o casa de cambio, nunca con alguien que te aborde en la calle.',
    },
  },
  {
    title: { fr: 'Payer en dollars sans calculer', en: 'Paying in dollars without checking', es: 'Pagar en dólares sin calcular' },
    text: {
      fr: 'Un prix en dollars peut cacher un mauvais taux. Vérifie avec le convertisseur avant de payer.',
      en: 'A price in dollars can hide a bad rate. Check with the converter before paying.',
      es: 'Un precio en dólares puede esconder una mala tasa. Revisa con el convertidor antes de pagar.',
    },
  },
  {
    title: { fr: 'Les rabatteurs', en: 'Touts', es: 'Los buscones' },
    text: {
      fr: 'À l’aéroport ou sur la plage, des “guides” proposent excursions et transferts. Réserve plutôt via ton hôtel ou une agence reconnue.',
      en: 'At the airport or on the beach, “guides” offer tours and transfers. Book through your hotel or a known agency instead.',
      es: 'En el aeropuerto o la playa, «guías» ofrecen excursiones y traslados. Mejor reserva con tu hotel o una agencia conocida.',
    },
  },
  {
    title: { fr: 'Le pourboire en double', en: 'The double tip', es: 'La propina doble' },
    text: {
      fr: 'L’addition contient souvent déjà 10 % de service. Regarde le ticket avant d’ajouter un pourboire.',
      en: 'The bill often already includes a 10% service charge. Check the receipt before adding a tip.',
      es: 'La cuenta suele incluir ya el 10 % de servicio. Revisa antes de dejar propina.',
    },
  },
];

export const practical: Tip[] = [
  {
    title: { fr: 'E-Ticket obligatoire', en: 'Mandatory E-Ticket', es: 'E-Ticket obligatorio' },
    text: {
      fr: 'Gratuit, à remplir pour l’arrivée et pour le départ. Faisable dès que tu as tes vols. Un formulaire pour 7 personnes maximum. Garde les QR codes en capture d’écran.',
      en: 'Free, required for arrival and departure. You can fill it in as soon as you have flights. One form for up to 7 people. Screenshot the QR codes.',
      es: 'Gratis, para la llegada y la salida. Se llena en cuanto tengas los vuelos. Un formulario para hasta 7 personas. Guarda los códigos QR en captura.',
    },
  },
  {
    title: { fr: 'Taxe de sortie', en: 'Departure tax', es: 'Impuesto de salida' },
    text: {
      fr: '20 USD, déjà inclus dans ton billet d’avion. Au-delà de 30 jours de séjour, des frais de prolongation s’appliquent au départ.',
      en: '20 USD, already included in your plane ticket. Stays over 30 days pay an extension fee when leaving.',
      es: '20 USD, ya incluidos en el boleto. Si te quedas más de 30 días, se paga una prórroga al salir.',
    },
  },
  {
    title: { fr: 'Électricité', en: 'Electricity', es: 'Electricidad' },
    text: { fr: '110 V et prises américaines : prévois un adaptateur.', en: '110 V and US-style plugs: bring an adapter if needed.', es: '110 V y enchufes tipo americano.' },
  },
  {
    title: { fr: 'Eau', en: 'Water', es: 'Agua' },
    text: {
      fr: 'Ne bois pas l’eau du robinet. Eau en bouteille, même pour se brosser les dents si tu as l’estomac sensible.',
      en: 'Don’t drink tap water. Use bottled water, even to brush your teeth if your stomach is sensitive.',
      es: 'No tomes agua del grifo. Agua embotellada, incluso para cepillarte si eres sensible.',
    },
  },
  {
    title: { fr: 'Au resto', en: 'At restaurants', es: 'En el restaurante' },
    text: {
      fr: 'L’addition inclut en général 18 % de taxe (ITBIS) et 10 % de service.',
      en: 'Bills usually include 18% tax (ITBIS) and a 10% service charge.',
      es: 'La cuenta suele incluir 18 % de ITBIS y 10 % de servicio.',
    },
  },
  {
    title: { fr: 'Péages et argent liquide', en: 'Tolls and cash', es: 'Peajes y efectivo' },
    text: {
      fr: 'Péages en espèces uniquement, en pesos et en petits billets. Retire de l’argent aux distributeurs situés dans les banques ou les centres commerciaux, de préférence en journée.',
      en: 'Tolls are cash only, in pesos and small bills. Use ATMs inside banks or malls, preferably during the day.',
      es: 'Peajes solo en efectivo, en pesos y billetes pequeños. Usa cajeros dentro de bancos o plazas, mejor de día.',
    },
  },
];

export const ETICKET_URL = 'https://eticket.migracion.gob.do';

export const emergencyNumbers: { label: T; number: string; main?: boolean }[] = [
  { label: { fr: 'Urgences (police, ambulance, pompiers)', en: 'Emergency (police, ambulance, fire)', es: 'Emergencias (policía, ambulancia, bomberos)' }, number: '911', main: true },
  { label: { fr: 'POLITUR, police touristique (ex-CESTUR)', en: 'POLITUR, tourist police (formerly CESTUR)', es: 'POLITUR, policía turística (antes CESTUR)' }, number: '809-222-2026' },
  { label: { fr: 'POLITUR, 2e numéro', en: 'POLITUR, 2nd number', es: 'POLITUR, 2.º número' }, number: '809-200-3500' },
];
