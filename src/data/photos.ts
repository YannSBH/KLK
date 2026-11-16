import type { T } from '../i18n';
// Photos libres de droits (Wikimedia Commons), créditées dans l'app.

export type Photo = { uri: string; credit: string; license: string; page: string };

// Wikimedia refuse les images demandées sans User-Agent descriptif (erreur 403).
// Sur Android, la valeur par défaut (« okhttp ») est bloquée : on s'identifie.
export const IMAGE_HEADERS = { 'User-Agent': 'KLK/1.5 (https://github.com/YannSBH/KLK) expo-image' };

export const imageSource = (p: { uri: string }) => ({ uri: p.uri, headers: IMAGE_HEADERS });

const TH = 'https://thumb.wikimedia.org/wikipedia/commons/thumb';
const O = 'https://upload.wikimedia.org/wikipedia/commons';
const C = 'https://commons.wikimedia.org/wiki/File:';

// path = "a/ab/Nom_encode.jpg" ; file = nom de la page Commons
export const thumb = (path: string, file: string, credit: string, license: string): Photo => {
  const name = path.split('/').pop()!;
  return { uri: `${TH}/${path}/960px-${name}`, credit, license, page: C + file };
};
export const orig = (path: string, file: string, credit: string, license: string): Photo => ({
  uri: `${O}/${path}`,
  credit,
  license,
  page: C + file,
});

export const activityPhotos: Record<string, Photo> = {
  buggy: thumb('e/e5/Mega_Aventures_Buggies.jpg', 'Mega_Aventures_Buggies.jpg', 'Funcheta', 'CC BY-SA 4.0'),
  saona: thumb('f/f0/Saona_Island_December_2020.jpg', 'Saona_Island_December_2020.jpg', 'Danu Widjajanto', 'CC BY-SA 4.0'),
  catamaran: thumb('d/d6/Lucas_I_Catamaran.jpg', 'Lucas_I_Catamaran.jpg', 'Mustang Joe', 'CC0'),
  snorkeling: thumb(
    '8/85/Buck_Island_Reef_National_Monument%2C_Virgin_Islands_%2806523f05-6c64-4c00-abe8-c14d9a46efab%29.jpg',
    'Buck_Island_Reef_National_Monument,_Virgin_Islands_(06523f05-6c64-4c00-abe8-c14d9a46efab).jpg',
    'NPS',
    'Domaine public',
  ),
  zipline: thumb('5/5c/Los_Veranos_Canopy_Tour_end_02.jpg', 'Los_Veranos_Canopy_Tour_end_02.jpg', 'DarkNight0917', 'CC BY-SA 4.0'),
  hoyoazul: thumb('e/e2/Dominican_Republic_Hoyo_Azul.jpg', 'Dominican_Republic_Hoyo_Azul.jpg', 'asw909 (Flickr)', 'CC BY 2.0'),
  baleines: orig(
    '1/1e/Mother_Humpback_Whale_in_Saman%C3%A1_Bay%2C_Dominican_Republic.jpg',
    'Mother_Humpback_Whale_in_Saman%C3%A1_Bay,_Dominican_Republic.jpg',
    'Caballero1967',
    'CC BY-SA 4.0',
  ),
  limon: thumb(
    '1/18/DOM_Santa_B%C3%A1rbara_de_Saman%C3%A1%2C_El_Lim%C3%B3n%2C_Monumento_Natural_Salto_El_Lim%C3%B3n_0046.jpg',
    'DOM_Santa_B%C3%A1rbara_de_Saman%C3%A1,_El_Lim%C3%B3n,_Monumento_Natural_Salto_El_Lim%C3%B3n_0046.jpg',
    'wuppertaler',
    'CC BY 4.0',
  ),
  bonita: thumb('e/ed/DOM_Las_Terrenas%2C_Playa_Bonita_0022.jpg', 'DOM_Las_Terrenas,_Playa_Bonita_0022.jpg', 'wuppertaler', 'CC BY 4.0'),
  zona: thumb(
    '3/31/Zona_Colonial%2C_Santo_Domingo%2C_Dominican_Republic_-_panoramio.jpg',
    'Zona_Colonial,_Santo_Domingo,_Dominican_Republic_-_panoramio.jpg',
    'Ernesto Fortuna',
    'CC BY-SA 3.0',
  ),
  tresojos: thumb('8/84/Santo_Domingo_Este_-_Los_Tres_Ojos_0946.JPG', 'Santo_Domingo_Este_-_Los_Tres_Ojos_0946.JPG', 'Phyrexian', 'CC BY-SA 4.0'),
  ambre: thumb(
    'a/a8/Dominican_Republic_20_million_years_old_amber_-_Amber_dombee.jpg',
    'Dominican_Republic_20_million_years_old_amber_-_Amber_dombee.jpg',
    'Oregon State University',
    'CC BY-SA 2.0',
  ),
};

export type Dish = { label: T; photo: Photo };

export const dishes: Record<string, Dish> = {
  bandera: { label: { fr: 'La bandera (riz, haricots, viande)', en: 'La bandera (rice, beans, meat)', es: 'La bandera (arroz, habichuelas, carne)' }, photo: thumb('2/2a/BanderaDominicana01.jpg', 'BanderaDominicana01.jpg', 'Asalas03', 'CC BY-SA 4.0') },
  mofongo: { label: { fr: 'Mofongo', en: 'Mofongo', es: 'Mofongo' }, photo: orig('6/62/Dominican_Mofongo.jpg', 'Dominican_Mofongo.jpg', 'Arturo Feliz-Camilo', 'CC BY 3.0') },
  picapollo: { label: { fr: 'Pica pollo', en: 'Pica pollo (fried chicken)', es: 'Pica pollo' }, photo: thumb('1/18/Pica_pollo.jpg', 'Pica_pollo.jpg', 'fugzu', 'CC BY 2.0') },
  poisson: { label: { fr: 'Poisson frit', en: 'Fried fish', es: 'Pescado frito' }, photo: thumb('7/7d/Pecao_frito.jpg', 'Pecao_frito.jpg', 'Arlene Campusano', 'CC BY-SA 4.0') },
  grillade: { label: { fr: 'Porc rôti', en: 'Roast pork', es: 'Cerdo asado' }, photo: orig('4/42/Cerdo_Asado.jpg', 'Cerdo_Asado.jpg', 'Franchesca TS', 'CC BY-SA 4.0') },
  confit: { label: { fr: 'Cuisine française', en: 'French cuisine', es: 'Cocina francesa' }, photo: thumb('1/1e/Canard_confit.jpg', 'Canard_confit.jpg', 'Marianne Casamance', 'CC BY-SA 4.0') },
  viennoiserie: {
    label: { fr: 'Pain au chocolat', en: 'Chocolate croissant', es: 'Pain au chocolat' },
    photo: thumb(
      'f/f8/Pain_au_chocolat_Mayfield_Farm_Bakery_Sheering_Essex_England.jpg',
      'Pain_au_chocolat_Mayfield_Farm_Bakery_Sheering_Essex_England.jpg',
      'Acabashi',
      'CC BY-SA 4.0',
    ),
  },
  pizza: { label: { fr: 'Pizza', en: 'Pizza', es: 'Pizza' }, photo: thumb('a/a0/202405211953_IMG_8165.jpg', '202405211953_IMG_8165.jpg', 'ウィ貴公子', 'CC BY-SA 4.0') },
  ceviche: {
    label: { fr: 'Ceviche', en: 'Ceviche', es: 'Ceviche' },
    photo: thumb(
      'b/b3/Lascar_Delicious_Peruvian_ceviche%21_%284578212666%29.jpg',
      'Lascar_Delicious_Peruvian_ceviche!_(4578212666).jpg',
      'Jorge Láscar',
      'CC BY 2.0',
    ),
  },
};
