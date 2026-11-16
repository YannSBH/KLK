// Activités, bonnes adresses et culture (FR / EN / ES). Prix indicatifs relevés en novembre 2026 :
// ils varient selon l'agence, la saison et ce qui est inclus.
import type { T } from '../i18n';

export type Activity = { name: T; price: T; tip: T; photo?: string };
export type ActivityGroup = { id: string; region: string; items: Activity[] };

const same = (s: string): T => ({ fr: s, en: s, es: s });

export const activityGroups: ActivityGroup[] = [
  {
    id: 'pc',
    region: 'Punta Cana / Bávaro',
    items: [
      {
        name: { fr: 'Buggy ou quad', en: 'Buggy or ATV', es: 'Buggy o cuatrimoto' },
        photo: 'buggy',
        price: { fr: '≈ 45 à 65 USD / pers.', en: '≈ 45–65 USD / person', es: '≈ 45–65 USD / persona' },
        tip: {
          fr: 'Pistes de terre, plantations, grotte et plage. Prévois des vêtements qui peuvent finir pleins de boue.',
          en: 'Dirt tracks, plantations, a cave and a beach. Wear clothes you don’t mind getting muddy.',
          es: 'Caminos de tierra, plantaciones, cueva y playa. Lleva ropa que se pueda ensuciar de lodo.',
        },
      },
      {
        name: { fr: 'Île Saona', en: 'Saona Island', es: 'Isla Saona' },
        photo: 'saona',
        price: { fr: '≈ 75 à 110 USD (standard), 130 à 165 USD (premium)', en: '≈ 75–110 USD (standard), 130–165 USD (premium)', es: '≈ 75–110 USD (estándar), 130–165 USD (premium)' },
        tip: {
          fr: 'Journée complète en catamaran et vedette, déjeuner et boissons en général inclus. La piscine naturelle et ses étoiles de mer valent le détour.',
          en: 'Full day by catamaran and speedboat, lunch and drinks usually included. The natural pool with starfish is worth it.',
          es: 'Día completo en catamarán y lancha, almuerzo y bebidas casi siempre incluidos. La piscina natural con estrellas de mar vale la pena.',
        },
      },
      {
        name: { fr: 'Party boat (catamaran)', en: 'Party boat (catamaran)', es: 'Party boat (catamarán)' },
        photo: 'catamaran',
        price: { fr: '≈ 65 USD / pers.', en: '≈ 65 USD / person', es: '≈ 65 USD / persona' },
        tip: { fr: 'Environ 4 h : musique, snorkeling, boissons à volonté.', en: 'About 4 hours: music, snorkeling, open bar.', es: 'Unas 4 h: música, snorkel, barra libre.' },
      },
      {
        name: { fr: 'Snorkeling en petit groupe', en: 'Small-group snorkeling', es: 'Snorkel en grupo pequeño' },
        photo: 'snorkeling',
        price: { fr: '≈ 99 USD / pers.', en: '≈ 99 USD / person', es: '≈ 99 USD / persona' },
        tip: { fr: 'Moins de monde, plus de temps dans l’eau.', en: 'Fewer people, more time in the water.', es: 'Menos gente, más tiempo en el agua.' },
      },
      {
        name: { fr: 'Tyrolienne', en: 'Zip line', es: 'Canopy / tirolesa' },
        photo: 'zipline',
        price: { fr: '≈ 55 USD / pers.', en: '≈ 55 USD / person', es: '≈ 55 USD / persona' },
        tip: { fr: 'Plusieurs câbles au-dessus de la jungle, transport souvent inclus.', en: 'Several lines over the jungle, transport often included.', es: 'Varios cables sobre la selva, transporte a menudo incluido.' },
      },
      {
        name: same('Scape Park + Hoyo Azul'),
        photo: 'hoyoazul',
        price: { fr: '≈ 129 USD / pers. (journée)', en: '≈ 129 USD / person (full day)', es: '≈ 129 USD / persona (día)' },
        tip: {
          fr: 'Le cenote bleu turquoise, plus tyroliennes, grottes et sentiers. Vérifie les promos sur le site du parc.',
          en: 'The turquoise cenote, plus zip lines, caves and trails. Check the park’s website for deals.',
          es: 'El cenote turquesa, más canopy, cuevas y senderos. Revisa ofertas en la web del parque.',
        },
      },
    ],
  },
  {
    id: 'samana',
    region: 'Samaná / Las Terrenas',
    items: [
      {
        name: { fr: 'Observation des baleines', en: 'Whale watching', es: 'Avistamiento de ballenas' },
        photo: 'baleines',
        price: { fr: '≈ 75 à 120 USD depuis Samaná, 130 à 200 USD depuis Punta Cana', en: '≈ 75–120 USD from Samaná, 130–200 USD from Punta Cana', es: '≈ 75–120 USD desde Samaná, 130–200 USD desde Punta Cana' },
        tip: {
          fr: 'Saison de mi-janvier à fin mars : les baleines à bosse viennent se reproduire dans la baie.',
          en: 'Season from mid-January to late March: humpback whales come to the bay to breed.',
          es: 'Temporada de mediados de enero a finales de marzo: las ballenas jorobadas vienen a la bahía a reproducirse.',
        },
      },
      {
        name: { fr: 'Cascade El Limón', en: 'El Limón waterfall', es: 'Salto El Limón' },
        photo: 'limon',
        price: { fr: '≈ 200 DOP l’entrée avec guide, cheval en supplément', en: '≈ 200 DOP entry with guide, horse extra', es: '≈ 200 DOP la entrada con guía, caballo aparte' },
        tip: {
          fr: 'La marche est faisable. À cheval, les guides vivent surtout des pourboires : prévois-en un.',
          en: 'The hike is doable. On horseback, guides live mostly on tips: plan for one.',
          es: 'La caminata se puede hacer. A caballo, los guías viven de las propinas: deja una.',
        },
      },
      {
        name: same('Playa Bonita & Playa Cosón'),
        photo: 'bonita',
        price: { fr: 'Gratuit', en: 'Free', es: 'Gratis' },
        tip: {
          fr: 'Bonnes vagues pour apprendre le surf, et coucher de soleil. Noix de coco vendues sur la plage.',
          en: 'Good waves to learn surfing, and great sunsets. Coconuts sold on the beach.',
          es: 'Buenas olas para aprender surf y bonitos atardeceres. Venden cocos en la playa.',
        },
      },
    ],
  },
  {
    id: 'sd',
    region: 'Santo Domingo',
    items: [
      {
        name: same('Zona Colonial'),
        photo: 'zona',
        price: { fr: 'Gratuit (balade)', en: 'Free (walk)', es: 'Gratis (paseo)' },
        tip: {
          fr: 'Première ville européenne des Amériques, classée à l’UNESCO. Cathédrale, Alcázar de Colón, calle El Conde.',
          en: 'The first European city in the Americas, a UNESCO site. Cathedral, Alcázar de Colón, Calle El Conde.',
          es: 'Primera ciudad europea de América, Patrimonio de la UNESCO. Catedral, Alcázar de Colón, calle El Conde.',
        },
      },
      {
        name: same('Los Tres Ojos'),
        photo: 'tresojos',
        price: { fr: '≈ 100 DOP affichés (tarif étranger possiblement plus élevé)', en: '≈ 100 DOP posted (foreigner price may be higher)', es: '≈ 100 DOP (el precio para extranjeros puede ser mayor)' },
        tip: {
          fr: 'Lacs souterrains dans des grottes de calcaire, à 15 min du centre.',
          en: 'Underground lakes in limestone caves, 15 minutes from downtown.',
          es: 'Lagos subterráneos en cuevas de piedra caliza, a 15 min del centro.',
        },
      },
    ],
  },
  {
    id: 'pp',
    region: 'Puerto Plata',
    items: [
      {
        name: { fr: 'Musée de l’Ambre', en: 'Amber Museum', es: 'Museo del Ámbar' },
        photo: 'ambre',
        price: { fr: 'À vérifier sur place', en: 'Check on site', es: 'Consultar en el lugar' },
        tip: {
          fr: 'Ambre avec insectes et même un lézard pris dedans il y a 15 à 20 millions d’années.',
          en: 'Amber with insects and even a lizard trapped inside 15 to 20 million years ago.',
          es: 'Ámbar con insectos e incluso una lagartija atrapados hace 15 a 20 millones de años.',
        },
      },
    ],
  },
];

export type PlaceKind = 'local' | 'french' | 'top' | 'budget';
export type Place = { name: string; kind: PlaceKind; cuisine: T; dish?: string; price?: string; tip: T };
export type City = { id: string; name: string; places: Place[] };

export const cities: City[] = [
  {
    id: 'pc',
    name: 'Punta Cana',
    places: [
      {
        name: 'La Casita de Yeya', dish: 'bandera', kind: 'local', price: '≈ 6–12 USD',
        cuisine: { fr: 'Cuisine dominicaine', en: 'Dominican food', es: 'Comida dominicana' },
        tip: { fr: 'À Bávaro. Plat du jour maison, loin des buffets d’hôtel.', en: 'In Bávaro. Homemade dish of the day, far from hotel buffets.', es: 'En Bávaro. Plato del día casero, lejos de los bufés de hotel.' },
      },
      {
        name: 'Delicias de Bávaro', dish: 'picapollo', kind: 'budget', price: '≈ 5–10 USD',
        cuisine: { fr: 'Dominicaine, buffet ou plat du jour', en: 'Dominican, buffet or dish of the day', es: 'Dominicana, bufé o plato del día' },
        tip: { fr: 'À Bávaro. Là où mangent les gens du coin.', en: 'In Bávaro. Where the locals eat.', es: 'En Bávaro. Donde come la gente de aquí.' },
      },
      {
        name: 'La Bruja Chupadora BBQ', dish: 'grillade', kind: 'local', price: '≈ 7–12 USD',
        cuisine: { fr: 'Grillades dominicaines', en: 'Dominican BBQ', es: 'Parrilla dominicana' },
        tip: { fr: 'À El Cortecito.', en: 'In El Cortecito.', es: 'En El Cortecito.' },
      },
      {
        name: 'Capitán Cook', dish: 'poisson', kind: 'local', price: '≈ 10–15 USD',
        cuisine: { fr: 'Poisson et fruits de mer', en: 'Fish and seafood', es: 'Pescado y mariscos' },
        tip: { fr: 'À El Cortecito, les pieds dans le sable. Choisis ton poisson.', en: 'In El Cortecito, feet in the sand. Pick your fish.', es: 'En El Cortecito, con los pies en la arena. Elige tu pescado.' },
      },
      {
        name: 'La Yola', dish: 'poisson', kind: 'top',
        cuisine: { fr: 'Fruits de mer, touches méditerranéennes et françaises', en: 'Seafood with Mediterranean and French touches', es: 'Mariscos con toques mediterráneos y franceses' },
        tip: { fr: 'Sur pilotis à la marina de Puntacana Resort. Pour un dîner spécial, réserve.', en: 'On stilts at the Puntacana Resort marina. Book for a special dinner.', es: 'Sobre pilotes en la marina de Puntacana Resort. Reserva para una cena especial.' },
      },
      {
        name: 'Jellyfish', dish: 'poisson', kind: 'top',
        cuisine: { fr: 'Fruits de mer', en: 'Seafood', es: 'Mariscos' },
        tip: { fr: 'Sur la plage de Bávaro, superbe au coucher du soleil. Service parfois lent.', en: 'On Bávaro beach, beautiful at sunset. Service can be slow.', es: 'En la playa de Bávaro, precioso al atardecer. El servicio puede ser lento.' },
      },
    ],
  },
  {
    id: 'sd',
    name: 'Santo Domingo',
    places: [
      {
        name: 'El Conuco', dish: 'mofongo', kind: 'local',
        cuisine: { fr: 'Dominicaine traditionnelle', en: 'Traditional Dominican', es: 'Dominicana tradicional' },
        tip: { fr: 'Mofongo, chivo guisado, mangú, souvent avec musique typique.', en: 'Mofongo, goat stew, mangú, often with live typical music.', es: 'Mofongo, chivo guisado, mangú, a menudo con música típica.' },
      },
      {
        name: 'Adrian Tropical', dish: 'mofongo', kind: 'local',
        cuisine: { fr: 'Dominicaine', en: 'Dominican', es: 'Dominicana' },
        tip: { fr: 'Sur le Malecón, face à la mer. Une valeur sûre pour goûter le mofongo.', en: 'On the Malecón, facing the sea. A safe bet for mofongo.', es: 'En el Malecón, frente al mar. Un clásico para probar mofongo.' },
      },
      {
        name: 'Buche Perico', dish: 'bandera', kind: 'local',
        cuisine: { fr: 'Dominicaine revisitée', en: 'Modern Dominican', es: 'Dominicana moderna' },
        tip: { fr: 'Zona Colonial. Jardin tropical, plats locaux modernisés.', en: 'Zona Colonial. Tropical garden, modern take on local dishes.', es: 'Zona Colonial. Jardín tropical, platos locales modernizados.' },
      },
      {
        name: 'Pat’e Palo', dish: 'confit', kind: 'french', price: '≈ 30–50 USD',
        cuisine: { fr: 'Brasserie européenne', en: 'European brasserie', es: 'Brasserie europea' },
        tip: { fr: 'Terrasse sur la Plaza de España, Zona Colonial. Confit de canard, ravioles de homard.', en: 'Terrace on Plaza de España, Zona Colonial. Duck confit, lobster ravioli.', es: 'Terraza en la Plaza de España, Zona Colonial. Confit de pato, ravioles de langosta.' },
      },
      {
        name: 'El Mesón de la Cava', dish: 'grillade', kind: 'top',
        cuisine: { fr: 'Viandes et fruits de mer', en: 'Meat and seafood', es: 'Carnes y mariscos' },
        tip: { fr: 'Dans une vraie grotte, on y descend par un escalier en colimaçon.', en: 'Inside a real cave, reached by a spiral staircase.', es: 'Dentro de una cueva real, se baja por una escalera de caracol.' },
      },
      {
        name: 'Casarré', dish: 'poisson', kind: 'top',
        cuisine: { fr: 'Gastronomique caribéenne', en: 'Caribbean fine dining', es: 'Alta cocina caribeña' },
        tip: { fr: 'Parmi les mieux notés de la ville. Réservation conseillée.', en: 'Among the city’s top rated. Booking recommended.', es: 'Entre los mejor valorados de la ciudad. Mejor reservar.' },
      },
    ],
  },
  {
    id: 'lt',
    name: 'Las Terrenas',
    places: [
      {
        name: 'Paco Cabana', dish: 'confit', kind: 'french',
        cuisine: { fr: 'Française classique, touches caribéennes', en: 'Classic French, Caribbean touches', es: 'Francesa clásica, toques caribeños' },
        tip: { fr: 'Sur une plage calme, prix moyens. Poisson du jour, langouste, profiteroles. Fermé le lundi.', en: 'On a quiet beach, mid-range prices. Catch of the day, lobster, profiteroles. Closed Mondays.', es: 'En una playa tranquila, precios medios. Pescado del día, langosta, profiteroles. Cierra los lunes.' },
      },
      {
        name: 'La Terrasse', dish: 'confit', kind: 'french',
        cuisine: { fr: 'Française et méditerranéenne', en: 'French and Mediterranean', es: 'Francesa y mediterránea' },
        tip: { fr: 'Au Pueblo de los Pescadores, face au coucher du soleil. Un peu plus cher, mais ça vaut le coup.', en: 'At Pueblo de los Pescadores, facing the sunset. A bit pricier, but worth it.', es: 'En el Pueblo de los Pescadores, frente al atardecer. Algo más caro, pero vale la pena.' },
      },
      {
        name: 'Boulangerie Française', dish: 'viennoiserie', kind: 'french',
        cuisine: { fr: 'Boulangerie, café', en: 'Bakery, café', es: 'Panadería, café' },
        tip: { fr: 'Plaza Taína, en centre-ville. Les pains au chocolat partent vers 9 h : viens tôt.', en: 'Plaza Taína, downtown. Chocolate croissants sell out around 9 a.m.: come early.', es: 'Plaza Taína, en el centro. Los pains au chocolat se acaban hacia las 9: ve temprano.' },
      },
      {
        name: 'La Yuca Caliente', dish: 'pizza', kind: 'budget', price: '≈ 10–15 USD',
        cuisine: { fr: 'Pizza au feu de bois, fruits de mer', en: 'Wood-fired pizza, seafood', es: 'Pizza al horno de leña, mariscos' },
        tip: { fr: 'Sur la plage. Essaie le mahi-mahi avec yuca frite.', en: 'On the beach. Try the mahi-mahi with fried yuca.', es: 'En la playa. Prueba el dorado con yuca frita.' },
      },
      {
        name: 'El Lugar', dish: 'grillade', kind: 'top',
        cuisine: { fr: 'Gastropub', en: 'Gastropub', es: 'Gastropub' },
        tip: { fr: 'Calle 27 de Febrero. Options végé. Fermé le mardi.', en: 'Calle 27 de Febrero. Veggie options. Closed Tuesdays.', es: 'Calle 27 de Febrero. Opciones vegetarianas. Cierra los martes.' },
      },
      {
        name: 'Porto by Mosquito', dish: 'ceviche', kind: 'top',
        cuisine: { fr: 'Péruvienne, ceviche', en: 'Peruvian, ceviche', es: 'Peruana, ceviche' },
        tip: { fr: 'Sur la plage, parfois avec musique live.', en: 'On the beach, sometimes with live music.', es: 'En la playa, a veces con música en vivo.' },
      },
    ],
  },
];

export type Fact = { id: string; icon: string; title: T; text: T };

export const countryFacts: Fact[] = [
  {
    id: 'cacao', icon: 'leaf-outline',
    title: { fr: 'Cacao et chocolat', en: 'Cocoa and chocolate', es: 'Cacao y chocolate' },
    text: {
      fr: 'Le pays est le 1er producteur mondial de cacao bio. En 2019, il était aussi le 1er exportateur de cacao et de bananes bio vers l’Union européenne.',
      en: 'The country is the world’s top producer of organic cocoa. In 2019 it was also the top exporter of organic cocoa and bananas to the EU.',
      es: 'El país es el primer productor mundial de cacao orgánico. En 2019 fue también el primer exportador de cacao y banano orgánicos a la Unión Europea.',
    },
  },
  {
    id: 'cafe', icon: 'cafe-outline',
    title: { fr: 'Café', en: 'Coffee', es: 'Café' },
    text: {
      fr: 'Arrivé en 1735, le café pousse aujourd’hui dans 28 provinces, surtout en montagne : Jarabacoa, Constanza, Barahona, San José de Ocoa.',
      en: 'Introduced in 1735, coffee now grows in 28 provinces, mostly in the mountains: Jarabacoa, Constanza, Barahona, San José de Ocoa.',
      es: 'Llegado en 1735, el café se cultiva hoy en 28 provincias, sobre todo en la montaña: Jarabacoa, Constanza, Barahona, San José de Ocoa.',
    },
  },
  {
    id: 'riz', icon: 'nutrition-outline',
    title: { fr: 'Riz', en: 'Rice', es: 'Arroz' },
    text: {
      fr: 'Le pays produit tout le riz qu’il consomme : environ 1 million de tonnes par an. Plus de 90 % vient du Cibao, la grande vallée du nord (Duarte en tête).',
      en: 'The country grows all the rice it eats: about 1 million tonnes a year. Over 90% comes from the Cibao, the big northern valley (led by Duarte).',
      es: 'El país produce todo el arroz que consume: cerca de 1 millón de toneladas al año. Más del 90 % viene del Cibao (Duarte a la cabeza).',
    },
  },
  {
    id: 'tabac', icon: 'flame-outline',
    title: { fr: 'Tabac et cigares', en: 'Tobacco and cigars', es: 'Tabaco y cigarros' },
    text: {
      fr: 'La République dominicaine est le 1er exportateur mondial de cigares haut de gamme. La région de Santiago fait plus de la moitié de la production.',
      en: 'The Dominican Republic is the world’s top exporter of premium cigars. The Santiago area makes over half of them.',
      es: 'República Dominicana es el primer exportador mundial de cigarros premium. La zona de Santiago produce más de la mitad.',
    },
  },
  {
    id: 'or', icon: 'diamond-outline',
    title: { fr: 'La mine d’or de Pueblo Viejo', en: 'The Pueblo Viejo gold mine', es: 'La mina de oro de Pueblo Viejo' },
    text: {
      fr: 'Dans la province de Sánchez Ramírez, c’est la plus grande mine d’or d’Amérique latine (Barrick 60 %, Newmont 40 %). C’était déjà le premier gisement d’or exploité par les Espagnols en Amérique.',
      en: 'In Sánchez Ramírez province, it’s the largest gold mine in Latin America (Barrick 60%, Newmont 40%). It was already the first gold deposit mined by the Spanish in the Americas.',
      es: 'En la provincia Sánchez Ramírez, es la mayor mina de oro de América Latina (Barrick 60 %, Newmont 40 %). Ya fue el primer yacimiento de oro explotado por los españoles en América.',
    },
  },
  {
    id: 'larimar', icon: 'water-outline',
    title: { fr: 'Le larimar', en: 'Larimar', es: 'El larimar' },
    text: {
      fr: 'Cette pierre bleue ne se trouve qu’ici, dans la mine de Los Chupaderos près de Barahona. Miguel Méndez l’a baptisée en 1974 : « Lari » pour sa fille Larissa, « mar » pour la mer.',
      en: 'This blue stone is only found here, in the Los Chupaderos mine near Barahona. Miguel Méndez named it in 1974: “Lari” for his daughter Larissa, “mar” for the sea.',
      es: 'Esta piedra azul solo existe aquí, en la mina Los Chupaderos cerca de Barahona. Miguel Méndez la bautizó en 1974: «Lari» por su hija Larissa y «mar» por el mar.',
    },
  },
  {
    id: 'ambre', icon: 'bug-outline',
    title: { fr: 'L’ambre dominicain', en: 'Dominican amber', es: 'El ámbar dominicano' },
    text: {
      fr: 'Réputé pour ses insectes fossilisés. Une pièce du Musée de l’Ambre de Puerto Plata a servi au film Jurassic Park.',
      en: 'Famous for its fossilized insects. A piece from the Amber Museum in Puerto Plata was used in the film Jurassic Park.',
      es: 'Famoso por sus insectos fosilizados. Una pieza del Museo del Ámbar de Puerto Plata se usó en la película Jurassic Park.',
    },
  },
  {
    id: 'medical', icon: 'medkit-outline',
    title: { fr: 'Tourisme médical', en: 'Medical tourism', es: 'Turismo médico' },
    text: {
      fr: 'Environ 270 000 personnes sont venues se soigner en 2022 : plus de la moitié pour les dents, environ 40 000 pour la chirurgie esthétique. Les prix sont bien plus bas qu’en Europe ou aux États-Unis. Vérifie que la clinique et le chirurgien sont certifiés, et ne reprends pas l’avion trop vite après une opération.',
      en: 'About 270,000 people came for treatment in 2022: over half for dental work, about 40,000 for cosmetic surgery. Prices are far lower than in Europe or the US. Check that the clinic and surgeon are certified, and don’t fly too soon after surgery.',
      es: 'Unas 270 000 personas vinieron a tratarse en 2022: más de la mitad por odontología y unas 40 000 por cirugía estética. Los precios son mucho más bajos que en Europa o EE. UU. Verifica que la clínica y el cirujano estén certificados y no vueles muy pronto tras una operación.',
    },
  },
  {
    id: 'pharma', icon: 'flask-outline',
    title: { fr: 'Médicaments et matériel médical', en: 'Medicines and medical devices', es: 'Medicamentos y dispositivos médicos' },
    text: {
      fr: 'Le matériel médical et les produits pharmaceutiques sont devenus le 1er poste d’exportation du pays : environ 1,9 milliard de dollars de janvier à août 2025, fabriqués surtout dans les zones franches. Le pays compte aussi environ 260 laboratoires pharmaceutiques, qui emploient plus de 17 000 personnes.',
      en: 'Medical devices and pharmaceuticals are now the country’s top export: about 1.9 billion dollars from January to August 2025, mostly made in free trade zones. The country also has about 260 pharmaceutical labs employing over 17,000 people.',
      es: 'Los dispositivos médicos y productos farmacéuticos son ya el primer renglón de exportación del país: cerca de 1 900 millones de dólares de enero a agosto de 2025, sobre todo en zonas francas. El país tiene además unos 260 laboratorios que emplean a más de 17 000 personas.',
    },
  },
];

export const anecdotes: T[] = [
  { fr: 'Santo Domingo est la première ville fondée par les Européens dans les Amériques.', en: 'Santo Domingo is the first city founded by Europeans in the Americas.', es: 'Santo Domingo es la primera ciudad fundada por europeos en América.' },
  { fr: 'Le merengue et la bachata sont nés ici, et tous deux sont au patrimoine culturel de l’UNESCO.', en: 'Merengue and bachata were born here, and both are on UNESCO’s cultural heritage list.', es: 'El merengue y la bachata nacieron aquí, y ambos son Patrimonio Cultural de la UNESCO.' },
  { fr: '« La bandera » (le drapeau) est aussi le plat national : riz, haricots rouges et viande.', en: '“La bandera” (the flag) is also the national dish: rice, red beans and meat.', es: '«La bandera» es también el plato nacional: arroz, habichuelas y carne.' },
  { fr: 'Le baseball est le sport roi : de nombreux joueurs de la MLB américaine sont dominicains.', en: 'Baseball is king: many MLB players are Dominican.', es: 'El béisbol es el rey: muchos jugadores de Grandes Ligas son dominicanos.' },
  { fr: 'Le drapeau dominicain est le seul au monde à porter une Bible au centre de ses armoiries.', en: 'The Dominican flag is the only one in the world with a Bible in its coat of arms.', es: 'La bandera dominicana es la única del mundo con una Biblia en su escudo.' },
  { fr: '« KLK » vient de « ¿Qué lo que? », le « ça dit quoi ? » dominicain.', en: '“KLK” comes from “¿Qué lo que?”, the Dominican “what’s up?”.', es: '«KLK» viene de «¿Qué lo que?», el saludo dominicano.' },
];
