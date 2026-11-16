// Activités, bonnes adresses et culture. Prix indicatifs relevés en novembre 2026 :
// ils varient selon l'agence, la saison et ce qui est inclus.

export type Activity = { name: string; price: string; tip: string; photo?: string };
export type ActivityGroup = { id: string; region: string; items: Activity[] };

export const activityGroups: ActivityGroup[] = [
  {
    id: 'pc',
    region: 'Punta Cana / Bávaro',
    items: [
      { name: 'Buggy ou quad', photo: 'buggy', price: '≈ 45 à 65 USD / pers.', tip: 'Pistes de terre, plantations, grotte et plage. Prévois des vêtements qui peuvent finir pleins de boue.' },
      { name: 'Île Saona', photo: 'saona', price: '≈ 75 à 110 USD (standard), 130 à 165 USD (premium)', tip: 'Journée complète en catamaran et vedette, déjeuner et boissons en général inclus. La piscine naturelle et ses étoiles de mer valent le détour.' },
      { name: 'Party boat (catamaran)', photo: 'catamaran', price: '≈ 65 USD / pers.', tip: 'Environ 4 h : musique, snorkeling, boissons à volonté.' },
      { name: 'Snorkeling en petit groupe', photo: 'snorkeling', price: '≈ 99 USD / pers.', tip: 'Moins de monde, plus de temps dans l’eau.' },
      { name: 'Tyrolienne', photo: 'zipline', price: '≈ 55 USD / pers.', tip: 'Plusieurs câbles au-dessus de la jungle, transport souvent inclus.' },
      { name: 'Scape Park + Hoyo Azul', photo: 'hoyoazul', price: '≈ 129 USD / pers. (journée)', tip: 'Le cenote bleu turquoise, plus tyroliennes, grottes et sentiers. Vérifie les promos sur le site du parc.' },
    ],
  },
  {
    id: 'samana',
    region: 'Samaná / Las Terrenas',
    items: [
      { name: 'Observation des baleines', photo: 'baleines', price: '≈ 75 à 120 USD depuis Samaná, 130 à 200 USD depuis Punta Cana', tip: 'Saison de mi-janvier à fin mars : les baleines à bosse viennent se reproduire dans la baie.' },
      { name: 'Cascade El Limón', photo: 'limon', price: '≈ 200 DOP l’entrée avec guide, cheval en supplément', tip: 'La marche est faisable. À cheval, les guides vivent surtout des pourboires : prévois-en un.' },
      { name: 'Playa Bonita et Playa Cosón', photo: 'bonita', price: 'Gratuit', tip: 'Bonnes vagues pour apprendre le surf, et coucher de soleil. Noix de coco vendues sur la plage.' },
    ],
  },
  {
    id: 'sd',
    region: 'Santo Domingo',
    items: [
      { name: 'Zona Colonial', photo: 'zona', price: 'Gratuit (balade)', tip: 'Première ville européenne des Amériques, classée à l’UNESCO. Cathédrale, Alcázar de Colón, calle El Conde.' },
      { name: 'Los Tres Ojos', photo: 'tresojos', price: '≈ 100 DOP affichés (tarif étranger possiblement plus élevé)', tip: 'Lacs souterrains dans des grottes de calcaire, à 15 min du centre.' },
    ],
  },
  {
    id: 'pp',
    region: 'Puerto Plata',
    items: [
      { name: 'Musée de l’Ambre', photo: 'ambre', price: 'À vérifier sur place', tip: 'Ambre avec insectes et même un lézard pris dedans il y a 15 à 20 millions d’années.' },
    ],
  },
];

export type Place = {
  name: string;
  kind: 'Local' | 'Français' | 'Top noté' | 'Petit budget';
  cuisine: string;
  dish?: string;
  price?: string;
  tip: string;
};
export type City = { id: string; name: string; places: Place[] };

export const cities: City[] = [
  {
    id: 'pc',
    name: 'Punta Cana',
    places: [
      { name: 'La Casita de Yeya', dish: 'bandera', kind: 'Local', cuisine: 'Cuisine dominicaine', price: '≈ 6 à 12 USD', tip: 'À Bávaro. Plat du jour maison, loin des buffets d’hôtel.' },
      { name: 'Delicias de Bávaro', dish: 'picapollo', kind: 'Petit budget', cuisine: 'Dominicaine, buffet ou plat du jour', price: '≈ 5 à 10 USD', tip: 'À Bávaro. Là où mangent les gens du coin.' },
      { name: 'La Bruja Chupadora BBQ', dish: 'grillade', kind: 'Local', cuisine: 'Grillades dominicaines', price: '≈ 7 à 12 USD', tip: 'À El Cortecito.' },
      { name: 'Capitán Cook', dish: 'poisson', kind: 'Local', cuisine: 'Poisson et fruits de mer', price: '≈ 10 à 15 USD (midi)', tip: 'À El Cortecito, les pieds dans le sable. Choisis ton poisson.' },
      { name: 'La Yola', dish: 'poisson', kind: 'Top noté', cuisine: 'Fruits de mer, touches méditerranéennes et françaises', tip: 'Sur pilotis à la marina de Puntacana Resort. Pour un dîner spécial, réserve.' },
      { name: 'Jellyfish', dish: 'poisson', kind: 'Top noté', cuisine: 'Fruits de mer', tip: 'Sur la plage de Bávaro, superbe au coucher du soleil. Service parfois lent.' },
    ],
  },
  {
    id: 'sd',
    name: 'Santo Domingo',
    places: [
      { name: 'El Conuco', dish: 'mofongo', kind: 'Local', cuisine: 'Dominicaine traditionnelle', tip: 'Mofongo, chivo guisado, mangú, souvent avec musique typique.' },
      { name: 'Adrian Tropical', dish: 'mofongo', kind: 'Local', cuisine: 'Dominicaine', tip: 'Sur le Malecón, face à la mer. Une valeur sûre pour goûter le mofongo.' },
      { name: 'Buche Perico', dish: 'bandera', kind: 'Local', cuisine: 'Dominicaine revisitée', tip: 'Zona Colonial. Jardin tropical, plats locaux modernisés.' },
      { name: 'Pat’e Palo', dish: 'confit', kind: 'Français', cuisine: 'Brasserie européenne', price: '≈ 30 à 50 USD', tip: 'Terrasse sur la Plaza de España, Zona Colonial. Confit de canard, ravioles de homard.' },
      { name: 'El Mesón de la Cava', dish: 'grillade', kind: 'Top noté', cuisine: 'Viandes et fruits de mer', tip: 'Dans une vraie grotte, on y descend par un escalier en colimaçon.' },
      { name: 'Casarré', dish: 'poisson', kind: 'Top noté', cuisine: 'Gastronomique caribéenne', tip: 'Parmi les mieux notés de la ville. Réservation conseillée.' },
    ],
  },
  {
    id: 'lt',
    name: 'Las Terrenas',
    places: [
      { name: 'Paco Cabana', dish: 'confit', kind: 'Français', cuisine: 'Française classique, touches caribéennes', tip: 'Sur une plage calme, prix moyens. Poisson du jour, langouste, profiteroles. Fermé le lundi.' },
      { name: 'La Terrasse', dish: 'confit', kind: 'Français', cuisine: 'Française et méditerranéenne', tip: 'Au Pueblo de los Pescadores, face au coucher du soleil. Un peu plus cher, mais ça vaut le coup.' },
      { name: 'Boulangerie Française', dish: 'viennoiserie', kind: 'Français', cuisine: 'Boulangerie, café', tip: 'Plaza Taína, en centre-ville. Les pains au chocolat partent vers 9 h : viens tôt.' },
      { name: 'La Yuca Caliente', dish: 'pizza', kind: 'Petit budget', cuisine: 'Pizza au feu de bois, fruits de mer', price: '≈ 10 à 15 USD', tip: 'Sur la plage. Essaie le mahi-mahi avec yuca frite.' },
      { name: 'El Lugar', dish: 'grillade', kind: 'Top noté', cuisine: 'Gastropub', tip: 'Calle 27 de Febrero. Options végé. Fermé le mardi.' },
      { name: 'Porto by Mosquito', dish: 'ceviche', kind: 'Top noté', cuisine: 'Péruvienne, ceviche', tip: 'Sur la plage, parfois avec musique live.' },
    ],
  },
];

export type Fact = { id: string; icon: string; title: string; text: string };

export const countryFacts: Fact[] = [
  { id: 'cacao', icon: 'leaf-outline', title: 'Cacao et chocolat', text: 'Le pays est le 1er producteur mondial de cacao bio. En 2019, il était aussi le 1er exportateur de cacao et de bananes bio vers l’Union européenne.' },
  { id: 'cafe', icon: 'cafe-outline', title: 'Café', text: 'Arrivé en 1735, le café pousse aujourd’hui dans 28 provinces, surtout en montagne : Jarabacoa, Constanza, Barahona, San José de Ocoa.' },
  { id: 'riz', icon: 'nutrition-outline', title: 'Riz', text: 'Le pays produit tout le riz qu’il consomme : environ 1 million de tonnes par an. Plus de 90\u00A0% vient du Cibao, la grande vallée du nord (Duarte en tête).' },
  { id: 'tabac', icon: 'flame-outline', title: 'Tabac et cigares', text: 'La République dominicaine est le 1er exportateur mondial de cigares haut de gamme. La région de Santiago fait plus de la moitié de la production.' },
  { id: 'or', icon: 'diamond-outline', title: 'La mine d’or de Pueblo Viejo', text: 'Dans la province de Sánchez Ramírez, c’est la plus grande mine d’or d’Amérique latine (Barrick 60 %, Newmont 40 %). C’était déjà le premier gisement d’or exploité par les Espagnols en Amérique.' },
  { id: 'larimar', icon: 'water-outline', title: 'Le larimar', text: 'Cette pierre bleue ne se trouve qu’ici, dans la mine de Los Chupaderos près de Barahona. Miguel Méndez l’a baptisée en 1974 : « Lari » pour sa fille Larissa, « mar » pour la mer.' },
  { id: 'ambre', icon: 'bug-outline', title: 'L’ambre dominicain', text: 'Réputé pour ses insectes fossilisés. Une pièce du Musée de l’Ambre de Puerto Plata a servi au film Jurassic Park.' },
  { id: 'medical', icon: 'medkit-outline', title: 'Tourisme médical', text: 'Environ 270 000 personnes sont venues se soigner en 2022 : plus de la moitié pour les dents, environ 40 000 pour la chirurgie esthétique. Les prix sont bien plus bas qu’en Europe ou aux États-Unis. Vérifie que la clinique et le chirurgien sont certifiés, et ne reprends pas l’avion trop vite après une opération.' },
  { id: 'pharma', icon: 'flask-outline', title: 'Médicaments et matériel médical', text: 'Le matériel médical et les produits pharmaceutiques sont devenus le 1er poste d’exportation du pays : environ 1,9 milliard de dollars de janvier à août 2025, fabriqués surtout dans les zones franches. Le pays compte aussi environ 260 laboratoires pharmaceutiques, qui emploient plus de 17 000 personnes.' },
];

export const anecdotes: string[] = [
  'Santo Domingo est la première ville fondée par les Européens dans les Amériques.',
  'Le merengue et la bachata sont nés ici, et tous deux sont au patrimoine culturel de l’UNESCO.',
  '« La bandera » (le drapeau) est aussi le plat national : riz, haricots rouges et viande.',
  'Le baseball est le sport roi : de nombreux joueurs de la MLB américaine sont dominicains.',
  'Le drapeau dominicain est le seul au monde à porter une Bible au centre de ses armoiries.',
  '« KLK » vient de « ¿Qué lo que? », le « ça dit quoi ? » dominicain.',
];
