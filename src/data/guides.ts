// Guides pratiques : santé, pourboires, argent, calendrier, voiture, checklist (FR / EN / ES).
// Sources : Grand Bay of the Sea (hôpitaux, sept. 2026 ; argent, oct. 2026), Lopesan (pourboires, sept. 2026),
// DRListings (pourboires, févr. 2026), Revista Mercado (feriados 2027, nov. 2026 ; Semana Santa, mars 2026),
// Rio Times (festival du merengue 2026), Sixt et Expat.com (conduite).
import type { T } from '../i18n';

export type GuideItem = { icon: string; title: T; text: T };

// ---------- Santé ----------
export type Hospital = { id: string; name: string; zone: string; phone?: string; query: string; note: T };

export const hospitals: Hospital[] = [
  {
    id: 'cmpc', name: 'Centro Médico Punta Cana', zone: 'Punta Cana / Bávaro', phone: '8095521506', query: 'Centro Médico Punta Cana Avenida España Bávaro',
    note: {
      fr: 'Urgences 24 h/24, le plus grand de la zone. Service international multilingue 24 h/24 : 809-473-7283.',
      en: '24/7 ER, the largest in the area. Multilingual international desk 24/7: 809-473-7283.',
      es: 'Emergencias 24 h, el más grande de la zona. Departamento internacional multilingüe 24 h: 809-473-7283.',
    },
  },
  {
    id: 'hospiten', name: 'Hospiten Bávaro', zone: 'Punta Cana / Bávaro', phone: '8096861414', query: 'Hospiten Bávaro',
    note: {
      fr: 'Urgences 24 h/24, réanimation, plus de 50 spécialités. Gère aussi des infirmeries dans plusieurs hôtels.',
      en: '24/7 ER, ICU, 50+ specialties. Also runs clinics inside several hotels.',
      es: 'Emergencias 24 h, UCI, más de 50 especialidades. También tiene consultorios en varios hoteles.',
    },
  },
  {
    id: 'img', name: 'Hospital IMG Punta Cana', zone: 'Punta Cana / Bávaro', phone: '8092856116', query: 'Hospital IMG Punta Cana',
    note: {
      fr: 'Urgences 24 h/24, souvent conseillé aux anglophones, accords avec de nombreuses assurances. WhatsApp : 849-261-6116.',
      en: '24/7 ER, often recommended for English speakers, works with many insurers. WhatsApp: 849-261-6116.',
      es: 'Emergencias 24 h, recomendado para angloparlantes, convenios con muchas aseguradoras. WhatsApp: 849-261-6116.',
    },
  },
  {
    id: 'sd', name: 'Hôpitaux de Santo Domingo', zone: 'Santo Domingo', query: 'hospital emergencias Santo Domingo',
    note: { fr: 'Grandes cliniques privées dans la capitale : ouvre Maps pour la plus proche.', en: 'Large private hospitals in the capital: open Maps for the nearest.', es: 'Grandes clínicas privadas en la capital: abre Maps para la más cercana.' },
  },
  {
    id: 'pp', name: 'Cliniques de Puerto Plata', zone: 'Puerto Plata', query: 'clínica emergencias Puerto Plata',
    note: { fr: 'Ouvre Maps pour la clinique la plus proche.', en: 'Open Maps for the nearest clinic.', es: 'Abre Maps para la clínica más cercana.' },
  },
  {
    id: 'lt', name: 'Cliniques de Las Terrenas / Samaná', zone: 'Samaná', query: 'clínica Las Terrenas',
    note: { fr: 'Pour un cas grave, l’hôpital de référence est souvent à Santo Domingo (≈ 2 h).', en: 'For serious cases, the main hospitals are often in Santo Domingo (≈ 2 h).', es: 'Para casos graves, los hospitales de referencia suelen estar en Santo Domingo (≈ 2 h).' },
  },
];

export const healthTips: GuideItem[] = [
  {
    icon: 'card-outline',
    title: { fr: 'Prends une assurance voyage', en: 'Get travel insurance', es: 'Contrata un seguro de viaje' },
    text: {
      fr: 'Les cliniques privées demandent souvent un paiement ou une garantie de l’assurance avant de soigner. Garde le numéro d’assistance de ton assurance dans ton téléphone.',
      en: 'Private hospitals often ask for payment or an insurance guarantee before treating you. Keep your insurer’s assistance number in your phone.',
      es: 'Las clínicas privadas suelen pedir pago o garantía del seguro antes de atenderte. Guarda el número de asistencia de tu seguro en el teléfono.',
    },
  },
  {
    icon: 'water-outline',
    title: { fr: 'Eau en bouteille', en: 'Bottled water', es: 'Agua embotellada' },
    text: {
      fr: 'Ne bois pas l’eau du robinet, même pour te brosser les dents si tu es sensible. Les glaçons des hôtels et restos touristiques sont en général faits avec de l’eau filtrée.',
      en: 'Don’t drink tap water; use bottled water to brush your teeth if you’re sensitive. Ice in hotels and tourist restaurants is usually made from filtered water.',
      es: 'No tomes agua del grifo; usa agua embotellada para cepillarte si eres sensible. El hielo en hoteles y restaurantes turísticos suele ser de agua filtrada.',
    },
  },
  {
    icon: 'sunny-outline',
    title: { fr: 'Soleil', en: 'Sun', es: 'Sol' },
    text: {
      fr: 'Le soleil tape fort, même par temps nuageux. Crème solaire haute protection, chapeau, et bois beaucoup, surtout avec l’alcool à volonté.',
      en: 'The sun is strong even when cloudy. High-SPF sunscreen, a hat, and drink plenty of water, especially with an open bar.',
      es: 'El sol es fuerte incluso nublado. Protector solar alto, sombrero y mucha agua, sobre todo con barra libre.',
    },
  },
  {
    icon: 'bug-outline',
    title: { fr: 'Moustiques', en: 'Mosquitoes', es: 'Mosquitos' },
    text: {
      fr: 'La dengue circule dans la Caraïbe. Répulsif matin et soir, vêtements longs au coucher du soleil. Fièvre forte après le voyage : consulte et dis où tu étais.',
      en: 'Dengue is present in the Caribbean. Repellent morning and evening, long sleeves at sunset. High fever after the trip: see a doctor and say where you travelled.',
      es: 'El dengue circula en el Caribe. Repelente mañana y tarde, ropa larga al atardecer. Fiebre alta tras el viaje: consulta y di dónde estuviste.',
    },
  },
  {
    icon: 'medkit-outline',
    title: { fr: 'Pharmacies', en: 'Pharmacies', es: 'Farmacias' },
    text: {
      fr: 'Nombreuses et souvent ouvertes tard. Beaucoup livrent à domicile ou à l’hôtel. Apporte tes médicaments habituels avec l’ordonnance.',
      en: 'Plentiful and often open late. Many deliver to your home or hotel. Bring your usual medicines with the prescription.',
      es: 'Muchas y a menudo abiertas hasta tarde. Muchas hacen delivery al hotel. Trae tus medicinas habituales con la receta.',
    },
  },
];

// ---------- Pourboires ----------
export type TipRow = { icon: string; who: T; amount: T; note?: T };

export const tipRows: TipRow[] = [
  {
    icon: 'restaurant-outline',
    who: { fr: 'Restaurant (hors hôtel)', en: 'Restaurant (outside resort)', es: 'Restaurante (fuera del hotel)' },
    amount: { fr: '10 % déjà sur la note + 5 à 10 % si service top', en: '10% already on the bill + 5–10% for great service', es: '10 % ya en la cuenta + 5–10 % si el servicio fue bueno' },
    note: { fr: 'Le « 10 % de ley » est obligatoire. Au comedor : arrondis ou laisse 20 à 50 DOP.', en: 'The “10% ley” is mandatory. At a comedor: round up or leave 20–50 DOP.', es: 'El 10 % de ley es obligatorio. En un comedor: redondea o deja 20–50 DOP.' },
  },
  {
    icon: 'beer-outline',
    who: { fr: 'Bar de l’hôtel', en: 'Resort bar', es: 'Bar del hotel' },
    amount: { fr: '1 à 2 $ la tournée', en: '$1–2 per round', es: '1–2 $ por ronda' },
  },
  {
    icon: 'fast-food-outline',
    who: { fr: 'Resto à la carte / buffet de l’hôtel', en: 'Resort à la carte / buffet', es: 'Restaurante o bufé del hotel' },
    amount: { fr: '2 à 5 $ par repas', en: '$2–5 per meal', es: '2–5 $ por comida' },
  },
  {
    icon: 'bed-outline',
    who: { fr: 'Femme de chambre', en: 'Housekeeping', es: 'Camarera de piso' },
    amount: { fr: '2 à 5 $ par jour', en: '$2–5 per day', es: '2–5 $ por día' },
    note: { fr: 'Chaque jour sur le lit : le personnel change.', en: 'Leave it daily on the bed: staff rotate.', es: 'Déjala cada día en la cama: el personal cambia.' },
  },
  {
    icon: 'briefcase-outline',
    who: { fr: 'Bagagiste', en: 'Bellhop', es: 'Maletero' },
    amount: { fr: '1 à 2 $ par valise', en: '$1–2 per bag', es: '1–2 $ por maleta' },
  },
  {
    icon: 'flag-outline',
    who: { fr: 'Guide d’excursion', en: 'Tour guide', es: 'Guía de excursión' },
    amount: { fr: '5 à 10 $ par personne (journée : jusqu’à 12 $)', en: '$5–10 per person (full day: up to $12)', es: '5–10 $ por persona (día completo: hasta 12 $)' },
    note: { fr: 'Un petit plus à part pour le chauffeur et l’équipage du bateau.', en: 'A little extra separately for the driver and boat crew.', es: 'Algo aparte para el chofer y la tripulación.' },
  },
  {
    icon: 'car-outline',
    who: { fr: 'Taxi', en: 'Taxi', es: 'Taxi' },
    amount: { fr: 'Arrondis ; + 2 à 3 $ s’il porte les bagages', en: 'Round up; + $2–3 if he handles luggage', es: 'Redondea; + 2–3 $ si ayuda con las maletas' },
  },
  {
    icon: 'bus-outline',
    who: { fr: 'Chauffeur de transfert privé', en: 'Private transfer driver', es: 'Chofer de traslado privado' },
    amount: { fr: '5 à 10 $ pour le groupe', en: '$5–10 for the group', es: '5–10 $ por el grupo' },
  },
  {
    icon: 'flower-outline',
    who: { fr: 'Spa', en: 'Spa', es: 'Spa' },
    amount: { fr: '15 à 20 %', en: '15–20%', es: '15–20 %' },
  },
  {
    icon: 'cart-outline',
    who: { fr: 'Station-service, emballeur au supermarché', en: 'Gas attendant, grocery bagger', es: 'Bombero de gasolinera, empacador del súper' },
    amount: { fr: '20 à 50 DOP', en: '20–50 DOP', es: '20–50 DOP' },
  },
];

export const tipsNote: T = {
  fr: 'En zone touristique, donne en dollars (billets de 1, 5 et 10 $). Ailleurs, en pesos. Pas de pièces en euros : les banques ne les changent pas.',
  en: 'In tourist areas, tip in dollars ($1, $5 and $10 bills). Elsewhere, in pesos. No euro coins: banks won’t exchange them.',
  es: 'En zonas turísticas, en dólares (billetes de 1, 5 y 10 $). En otros lugares, en pesos. Nada de monedas de euro: los bancos no las cambian.',
};

// ---------- Argent ----------
export const moneyItems: GuideItem[] = [
  {
    icon: 'swap-horizontal-outline',
    title: { fr: 'Dollars ou pesos ?', en: 'Dollars or pesos?', es: '¿Dólares o pesos?' },
    text: {
      fr: 'Dollars à l’hôtel, pour les excursions et les souvenirs. Pesos partout ailleurs : supermarché, colmado, resto local, essence, pharmacie. Payer en dollars là-bas coûte plus cher.',
      en: 'Dollars at the resort, for tours and souvenirs. Pesos everywhere else: supermarket, colmado, local food, gas, pharmacy. Paying in dollars there costs more.',
      es: 'Dólares en el hotel, excursiones y souvenirs. Pesos en todo lo demás: súper, colmado, comida local, gasolina, farmacia. Pagar en dólares ahí sale más caro.',
    },
  },
  {
    icon: 'cash-outline',
    title: { fr: 'Distributeurs', en: 'ATMs', es: 'Cajeros' },
    text: {
      fr: 'Préfère ceux des banques (Banco Popular, BanReservas, Scotiabank), à l’intérieur d’une agence ou d’un centre commercial, en journée. Compte 3 à 5 $ de frais par retrait, en plus de ta banque : retire moins souvent, mais plus.',
      en: 'Use bank ATMs (Banco Popular, BanReservas, Scotiabank), inside a branch or mall, in daytime. Expect $3–5 per withdrawal on top of your bank’s fee: withdraw less often, but more.',
      es: 'Usa cajeros de bancos (Banco Popular, BanReservas, Scotiabank), dentro de una sucursal o plaza, de día. Cuenta 3–5 $ por retiro además de tu banco: retira menos veces, pero más.',
    },
  },
  {
    icon: 'alert-circle-outline',
    title: { fr: 'Choisis toujours les pesos', en: 'Always choose pesos', es: 'Elige siempre pesos' },
    text: {
      fr: 'Quand le distributeur ou le terminal te propose de payer « avec conversion » dans ta monnaie, refuse : choisis DOP et laisse ta banque convertir. Le taux proposé sur place est presque toujours moins bon.',
      en: 'When the ATM or card machine offers to charge you “with conversion” in your currency, decline: pick DOP and let your bank convert. The on-the-spot rate is almost always worse.',
      es: 'Si el cajero o el datáfono ofrece cobrarte «con conversión» en tu moneda, rechaza: elige DOP y deja que tu banco convierta. Esa tasa casi siempre es peor.',
    },
  },
  {
    icon: 'card-outline',
    title: { fr: 'Cartes', en: 'Cards', es: 'Tarjetas' },
    text: {
      fr: 'Visa et Mastercard passent presque partout en ville et à l’hôtel ; Amex moins, Discover rarement. Certains petits prestataires ajoutent environ 10 % pour la carte : c’est légal, demande avant.',
      en: 'Visa and Mastercard work almost everywhere in towns and resorts; Amex less, Discover rarely. Some small operators add about 10% for cards: it’s legal, ask first.',
      es: 'Visa y Mastercard funcionan casi en todas partes; Amex menos, Discover casi nunca. Algunos pequeños negocios cobran un 10 % por tarjeta: es legal, pregunta antes.',
    },
  },
  {
    icon: 'business-outline',
    title: { fr: 'Où changer ?', en: 'Where to exchange?', es: '¿Dónde cambiar?' },
    text: {
      fr: 'Du meilleur au pire : bureau de change d’une banque en ville, comptoir de change du supermarché (Jumbo, La Sirena), distributeur, réception de l’hôtel (≈ 5 % de moins), aéroport (juste de quoi arriver à l’hôtel).',
      en: 'Best to worst: bank exchange office in town, supermarket exchange desk (Jumbo, La Sirena), ATM, hotel front desk (≈ 5% less), airport (just enough to reach the hotel).',
      es: 'De mejor a peor: casa de cambio de un banco, cambio en el súper (Jumbo, La Sirena), cajero, recepción del hotel (≈ 5 % menos), aeropuerto (solo lo justo para llegar).',
    },
  },
  {
    icon: 'wallet-outline',
    title: { fr: 'Petites coupures', en: 'Small bills', es: 'Billetes pequeños' },
    text: {
      fr: 'Garde des petits billets : beaucoup de vendeurs n’ont pas la monnaie sur 50 ou 100 $. Vérifie le rendu de monnaie, surtout s’il mélange dollars et pesos. Le surplus, au coffre de la chambre.',
      en: 'Keep small bills: many vendors can’t break $50 or $100. Check your change, especially if they mix dollars and pesos. Leave the rest in the room safe.',
      es: 'Lleva billetes pequeños: muchos no tienen cambio para 50 o 100 $. Revisa el cambio, sobre todo si mezclan dólares y pesos. El resto, en la caja fuerte.',
    },
  },
];

// ---------- Calendrier ----------
export type Holiday = { date: string; name: T };

export const holidays: Holiday[] = [
  { date: '2026-12-25', name: { fr: 'Noël', en: 'Christmas', es: 'Navidad' } },
  { date: '2027-01-01', name: { fr: 'Jour de l’an', en: 'New Year’s Day', es: 'Año Nuevo' } },
  { date: '2027-01-04', name: { fr: 'Épiphanie (Reyes)', en: 'Epiphany (Reyes)', es: 'Día de Reyes' } },
  { date: '2027-01-21', name: { fr: 'Notre-Dame de l’Altagracia', en: 'Our Lady of Altagracia', es: 'Nuestra Señora de la Altagracia' } },
  { date: '2027-01-25', name: { fr: 'Jour de Duarte', en: 'Duarte Day', es: 'Día de Duarte' } },
  { date: '2027-02-27', name: { fr: 'Fête de l’Indépendance', en: 'Independence Day', es: 'Día de la Independencia' } },
  { date: '2027-03-26', name: { fr: 'Vendredi saint', en: 'Good Friday', es: 'Viernes Santo' } },
  { date: '2027-05-01', name: { fr: 'Fête du Travail', en: 'Labour Day', es: 'Día del Trabajo' } },
  { date: '2027-05-27', name: { fr: 'Fête-Dieu', en: 'Corpus Christi', es: 'Corpus Christi' } },
  { date: '2027-08-16', name: { fr: 'Jour de la Restauration', en: 'Restoration Day', es: 'Día de la Restauración' } },
  { date: '2027-09-24', name: { fr: 'Notre-Dame de las Mercedes', en: 'Our Lady of Mercedes', es: 'Nuestra Señora de las Mercedes' } },
  { date: '2027-11-06', name: { fr: 'Jour de la Constitution', en: 'Constitution Day', es: 'Día de la Constitución' } },
  { date: '2027-12-25', name: { fr: 'Noël', en: 'Christmas', es: 'Navidad' } },
];

export const holidaysNote: T = {
  fr: 'Jours fériés officiels (certains sont décalés au lundi). Banques et administrations ferment ; les hôtels et la plupart des commerces touristiques restent ouverts.',
  en: 'Official public holidays (some move to Monday). Banks and offices close; resorts and most tourist businesses stay open.',
  es: 'Feriados oficiales (algunos se mueven al lunes). Bancos y oficinas cierran; hoteles y comercios turísticos suelen abrir.',
};

export const seasons: GuideItem[] = [
  {
    icon: 'sunny-outline',
    title: { fr: 'Décembre à avril : saison sèche', en: 'December to April: dry season', es: 'Diciembre a abril: temporada seca' },
    text: { fr: 'Le plus beau temps et la haute saison : hôtels et vols plus chers, réserve tôt.', en: 'Best weather and high season: pricier hotels and flights, book early.', es: 'El mejor clima y temporada alta: hoteles y vuelos más caros, reserva pronto.' },
  },
  {
    icon: 'rainy-outline',
    title: { fr: 'Mai à novembre : saison plus humide', en: 'May to November: wetter season', es: 'Mayo a noviembre: temporada más lluviosa' },
    text: { fr: 'Averses courtes et fortes, souvent l’après-midi. Plus chaud, moins de monde, meilleurs prix.', en: 'Short, heavy showers, often in the afternoon. Hotter, quieter, better prices.', es: 'Aguaceros cortos y fuertes, a menudo por la tarde. Más calor, menos gente, mejores precios.' },
  },
  {
    icon: 'thunderstorm-outline',
    title: { fr: 'Juin à novembre : saison des ouragans', en: 'June to November: hurricane season', es: 'Junio a noviembre: temporada de huracanes' },
    text: {
      fr: 'Le risque est plus fort d’août à octobre. Prends une assurance qui couvre l’annulation, suis la météo, et écoute les consignes de l’hôtel en cas d’alerte.',
      en: 'Risk peaks August to October. Get insurance that covers cancellation, follow the forecast and the hotel’s instructions if there’s an alert.',
      es: 'El riesgo es mayor de agosto a octubre. Ten un seguro con cancelación, sigue el pronóstico y las indicaciones del hotel si hay alerta.',
    },
  },
];

export const events: GuideItem[] = [
  {
    icon: 'happy-outline',
    title: { fr: 'Carnaval — février', en: 'Carnival — February', es: 'Carnaval — febrero' },
    text: {
      fr: 'Défilés tous les dimanches de février dans de nombreuses villes ; celui de La Vega est le plus célèbre. Grand défilé national sur le Malecón de Santo Domingo, en général début mars.',
      en: 'Parades every Sunday in February in many towns; La Vega’s is the most famous. Big national parade on Santo Domingo’s Malecón, usually early March.',
      es: 'Desfiles todos los domingos de febrero en muchas ciudades; el de La Vega es el más famoso. Gran desfile nacional en el Malecón de Santo Domingo, en general a inicios de marzo.',
    },
  },
  {
    icon: 'flag-outline',
    title: { fr: '27 février — Indépendance', en: 'February 27 — Independence', es: '27 de febrero — Independencia' },
    text: { fr: 'Fête nationale, défilés et drapeaux partout.', en: 'National day, parades and flags everywhere.', es: 'Fiesta nacional, desfiles y banderas por todas partes.' },
  },
  {
    icon: 'ban-outline',
    title: { fr: 'Semana Santa — 21 au 28 mars 2027', en: 'Holy Week — March 21–28, 2027', es: 'Semana Santa — 21 al 28 de marzo de 2027' },
    text: {
      fr: 'Tout le pays part à la plage : routes et plages bondées. En 2026, vente d’alcool interdite 24 h le Vendredi saint et grandes fêtes interdites sur les plages. Réserve tôt.',
      en: 'The whole country heads to the beach: packed roads and beaches. In 2026, alcohol sales were banned for 24 h on Good Friday and big beach parties were banned. Book early.',
      es: 'Todo el país va a la playa: carreteras y playas llenas. En 2026 se prohibió vender alcohol 24 h el Viernes Santo y las fiestas masivas en playas. Reserva pronto.',
    },
  },
  {
    icon: 'musical-notes-outline',
    title: { fr: 'Festival du merengue — fin juillet', en: 'Merengue Festival — late July', es: 'Festival del Merengue — finales de julio' },
    text: { fr: 'Environ deux semaines de concerts, surtout sur le Malecón de Santo Domingo (fin juillet – début août en 2026).', en: 'About two weeks of concerts, mainly on Santo Domingo’s Malecón (late July – early August in 2026).', es: 'Unas dos semanas de conciertos, sobre todo en el Malecón de Santo Domingo (finales de julio – inicios de agosto en 2026).' },
  },
  {
    icon: 'fish-outline',
    title: { fr: 'Baleines — mi-janvier à fin mars', en: 'Whales — mid-January to late March', es: 'Ballenas — mediados de enero a finales de marzo' },
    text: { fr: 'Les baleines à bosse dans la baie de Samaná.', en: 'Humpback whales in Samaná Bay.', es: 'Ballenas jorobadas en la bahía de Samaná.' },
  },
];

// ---------- Voiture ----------
export const driveItems: GuideItem[] = [
  {
    icon: 'id-card-outline',
    title: { fr: 'Permis', en: 'Licence', es: 'Licencia' },
    text: {
      fr: 'Ton permis étranger est accepté environ 30 jours après l’arrivée. Garde sur toi permis, passeport, papiers de location et d’assurance. Vérifie l’âge minimum et les conditions avec le loueur.',
      en: 'Your foreign licence is accepted for about 30 days after arrival. Always carry licence, passport, rental and insurance papers. Check the minimum age and conditions with the rental company.',
      es: 'Tu licencia extranjera vale unos 30 días desde la llegada. Lleva siempre licencia, pasaporte, contrato y seguro. Confirma la edad mínima y condiciones con la rentadora.',
    },
  },
  {
    icon: 'speedometer-outline',
    title: { fr: 'Règles de base', en: 'Basic rules', es: 'Reglas básicas' },
    text: {
      fr: 'Conduite à droite. En général 40 km/h en ville, 80 sur route, jusqu’à 120 sur autoroute : suis les panneaux. Ceinture obligatoire pour tous, téléphone seulement en mains libres.',
      en: 'Drive on the right. Usually 40 km/h in towns, 80 on roads, up to 120 on highways: follow the signs. Seatbelts for everyone, phone hands-free only.',
      es: 'Se conduce por la derecha. En general 40 km/h en ciudad, 80 en carretera y hasta 120 en autopista: sigue las señales. Cinturón para todos, teléfono solo con manos libres.',
    },
  },
  {
    icon: 'warning-outline',
    title: { fr: 'Conduis défensif', en: 'Drive defensively', es: 'Maneja a la defensiva' },
    text: {
      fr: 'Motos qui doublent des deux côtés, priorités peu respectées, nids-de-poule, animaux sur la route. Évite de rouler de nuit hors des villes : routes peu éclairées et véhicules sans phares.',
      en: 'Motorbikes passing on both sides, right of way often ignored, potholes, animals on the road. Avoid driving at night outside towns: poor lighting and vehicles without headlights.',
      es: 'Motos que adelantan por ambos lados, preferencias poco respetadas, hoyos, animales en la vía. Evita manejar de noche fuera de las ciudades: poca luz y vehículos sin luces.',
    },
  },
  {
    icon: 'shield-checkmark-outline',
    title: { fr: 'Contrôles de police', en: 'Police checks', es: 'Retenes policiales' },
    text: {
      fr: 'Les contrôles sont fréquents, surtout pour les papiers. Reste calme et poli, montre tes documents. Si on te réclame une « amende » en liquide, demande un reçu ou une contravention écrite.',
      en: 'Checks are common, mostly for papers. Stay calm and polite, show your documents. If asked for a cash “fine”, ask for a receipt or a written ticket.',
      es: 'Los retenes son frecuentes, sobre todo por documentos. Mantén la calma, muestra tus papeles. Si te piden una «multa» en efectivo, pide recibo o multa por escrito.',
    },
  },
  {
    icon: 'cash-outline',
    title: { fr: 'Péages et essence', en: 'Tolls and fuel', es: 'Peajes y gasolina' },
    text: {
      fr: 'Les grands axes ont des péages : garde des pesos en petite monnaie. Peu de stations en campagne : fais le plein quand tu peux. On te sert à la pompe, un petit pourboire fait plaisir.',
      en: 'Main highways have tolls: keep small peso bills. Few gas stations in the countryside: fill up when you can. Attendants pump for you; a small tip is appreciated.',
      es: 'Las autopistas tienen peajes: lleva pesos sueltos. Pocas gasolineras en el campo: llena cuando puedas. Te despachan en la bomba; una propina pequeña se agradece.',
    },
  },
  {
    icon: 'bicycle-outline',
    title: { fr: 'Scooter et moto', en: 'Scooter and motorbike', es: 'Pasola y moto' },
    text: {
      fr: 'Casque obligatoire pour le conducteur. C’est la première cause d’accidents graves de touristes : n’en loue pas si tu n’es pas déjà à l’aise, et vérifie que ton assurance te couvre.',
      en: 'Helmet mandatory for the rider. It’s the top cause of serious tourist accidents: don’t rent one unless you’re already confident, and check your insurance covers it.',
      es: 'Casco obligatorio para el conductor. Es la principal causa de accidentes graves de turistas: no alquiles si no tienes experiencia, y verifica que tu seguro lo cubra.',
    },
  },
  {
    icon: 'camera-outline',
    title: { fr: 'À la prise du véhicule', en: 'When picking up the car', es: 'Al recoger el vehículo' },
    text: {
      fr: 'Filme la voiture sous tous les angles avec le loueur, vérifie la roue de secours, le triangle et le gilet. En cas d’accident : 911, ne bouge pas le véhicule, appelle le loueur.',
      en: 'Film the car from every angle with the agent, check the spare tyre, triangle and vest. In an accident: 911, don’t move the car, call the rental company.',
      es: 'Graba el carro por todos lados con el agente, revisa la goma de repuesto, el triángulo y el chaleco. En caso de accidente: 911, no muevas el vehículo, llama a la rentadora.',
    },
  },
];

// ---------- Checklist ----------
export type CheckItem = { id: string; title: T; text?: T };

export const checklist: CheckItem[] = [
  {
    id: 'passport',
    title: { fr: 'Passeport valide', en: 'Valid passport', es: 'Pasaporte vigente' },
    text: { fr: 'Valable au moins pendant tout le séjour (mieux : 6 mois). Garde une photo dans ton téléphone.', en: 'Valid for your whole stay (better: 6 months). Keep a photo on your phone.', es: 'Vigente durante toda la estancia (mejor: 6 meses). Guarda una foto en el teléfono.' },
  },
  {
    id: 'eticket',
    title: { fr: 'e-Ticket rempli', en: 'e-Ticket completed', es: 'e-Ticket llenado' },
    text: { fr: 'Formulaire gratuit sur eticket.migracion.gob.do, à l’arrivée et au départ. Garde le QR code.', en: 'Free form at eticket.migracion.gob.do, for arrival and departure. Keep the QR code.', es: 'Formulario gratis en eticket.migracion.gob.do, para llegada y salida. Guarda el código QR.' },
  },
  {
    id: 'insurance',
    title: { fr: 'Assurance voyage', en: 'Travel insurance', es: 'Seguro de viaje' },
    text: { fr: 'Frais médicaux et rapatriement, et annulation en saison des ouragans.', en: 'Medical and repatriation, plus cancellation in hurricane season.', es: 'Gastos médicos y repatriación, y cancelación en temporada de huracanes.' },
  },
  {
    id: 'esim',
    title: { fr: 'e-SIM installée', en: 'eSIM installed', es: 'eSIM instalada' },
    text: { fr: 'Installe-la avec le Wi-Fi avant de partir. Voir la page Internet & e-SIM.', en: 'Install it on Wi-Fi before leaving. See the Internet & eSIM page.', es: 'Instálala con Wi-Fi antes de salir. Mira la página Internet y eSIM.' },
  },
  {
    id: 'cash',
    title: { fr: 'Petits billets en dollars', en: 'Small dollar bills', es: 'Billetes pequeños en dólares' },
    text: { fr: 'Des billets de 1, 5 et 10 $ pour les pourboires et le taxi.', en: '$1, $5 and $10 bills for tips and taxis.', es: 'Billetes de 1, 5 y 10 $ para propinas y taxi.' },
  },
  {
    id: 'card',
    title: { fr: 'Banque prévenue', en: 'Bank notified', es: 'Banco avisado' },
    text: { fr: 'Préviens ta banque de ton voyage et vérifie tes plafonds de retrait.', en: 'Tell your bank about the trip and check your withdrawal limits.', es: 'Avisa a tu banco del viaje y revisa tus límites de retiro.' },
  },
  {
    id: 'plug',
    title: { fr: 'Adaptateur de prise', en: 'Plug adapter', es: 'Adaptador de enchufe' },
    text: { fr: 'Prises américaines (types A et B), 110 V.', en: 'US-style plugs (types A and B), 110 V.', es: 'Enchufes tipo americano (A y B), 110 V.' },
  },
  {
    id: 'meds',
    title: { fr: 'Trousse santé', en: 'Health kit', es: 'Botiquín' },
    text: { fr: 'Crème solaire, répulsif moustiques, médicaments habituels avec l’ordonnance.', en: 'Sunscreen, mosquito repellent, usual medicines with prescription.', es: 'Protector solar, repelente, medicinas habituales con receta.' },
  },
  {
    id: 'transfer',
    title: { fr: 'Transfert de l’aéroport prévu', en: 'Airport transfer planned', es: 'Traslado del aeropuerto listo' },
    text: { fr: 'Réservé à l’avance, ou garde la page Prix des taxis ouverte à l’arrivée.', en: 'Booked ahead, or keep the Taxi prices page open when you land.', es: 'Reservado, o ten abierta la página de precios de taxi al llegar.' },
  },
  {
    id: 'license',
    title: { fr: 'Permis de conduire', en: 'Driving licence', es: 'Licencia de conducir' },
    text: { fr: 'Si tu comptes louer une voiture ou un scooter.', en: 'If you plan to rent a car or scooter.', es: 'Si piensas alquilar carro o pasola.' },
  },
  {
    id: 'offline',
    title: { fr: 'KLK ouvert une fois avec Internet', en: 'KLK opened once online', es: 'KLK abierta una vez con internet' },
    text: { fr: 'Pour charger les photos et les taux de change avant le vol.', en: 'To load photos and exchange rates before the flight.', es: 'Para cargar fotos y tasas de cambio antes del vuelo.' },
  },
];
