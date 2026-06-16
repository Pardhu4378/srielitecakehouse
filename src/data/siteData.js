// ─── CONTACT DETAILS ────────────────────────────────────────────
export const PHONE_NUMBER = '+91 7795064442';
export const PHONE_DISPLAY = '+91 7795064442';
export const WHATSAPP_NUMBER = '+91 7795064442';
export const INSTAGRAM_URL = 'https://www.instagram.com/srielitecakehouse/';
export const FACEBOOK_URL = 'https://www.facebook.com/SriEliteCakeHouse';

// ─── CATEGORIES ─────────────────────────────────────────────────
export const CATEGORIES = [
  { id: 'cakes',    label: 'Cakes',             slug: 'cakes',    emoji: '🎂', desc: 'Custom cakes for every celebration' },
  { id: 'bento',    label: 'Bento Cakes',       slug: 'bento',    emoji: '🎁', desc: 'Trendy mini lunchbox cakes' },
  { id: 'donuts',   label: 'Donuts',            slug: 'donuts',   emoji: '🍩', desc: 'Freshly glazed gourmet donuts' },
  { id: 'muffins',  label: 'Muffins',           slug: 'muffins',  emoji: '🧁', desc: 'Soft bakery-style muffins' },
  { id: 'cupcakes', label: 'Cupcakes',          slug: 'cupcakes', emoji: '🍰', desc: 'Beautifully decorated cupcakes' },
  { id: 'brownies', label: 'Brownies',          slug: 'brownies', emoji: '🍫', desc: 'Rich fudgy chocolate brownies' },
  { id: 'dreamtin', label: 'Dream Tin Cakes',   slug: 'dreamtin', emoji: '🥫', desc: 'Trending Dream Tin Cakes'},

];

// ─── CAKE OCCASIONS ──────────────────────────────────────────────
export const CAKE_OCCASIONS = [
  { id: 'birthday',    label: 'Birthday Cakes',    icon: '🎂', color: '#C8944A' },
  { id: 'anniversary', label: 'Anniversary Cakes', icon: '💕', color: '#8B5E3C' },
  { id: 'wedding',     label: 'Wedding Cakes',     icon: '💍', color: '#D4A847' },
  { id: 'babyshower',  label: 'Baby Shower Cakes', icon: '👶', color: '#C8944A' },
  { id: 'theme',       label: 'Theme Cakes',       icon: '🎨', color: '#8B5E3C' },
  { id: 'photo',       label: 'Photo Cakes',       icon: '📸', color: '#D4A847' },
  { id: 'corporate',   label: 'Corporate Cakes',   icon: '🏢', color: '#C8944A' },
];

// ─── PRODUCTS (with real prices) ─────────────────────────────────
// price: display string  |  priceValue: numeric for sorting
// unit: per KG / per piece / per box / onwards

export const PRODUCTS = {
  cakes: [
  {
    name: 'Vanilla Cake (Premix Basic)',
    description: 'Vanilla cake',
    price: '₹400 / ₹700',
    priceValue: 400,
    unit: '500g / 1kg',
    image: '/products/cakes/vanilla.jpg',
    available: true
  },
  {
    name: 'Vanilla Cake (Premium)',
    description: 'Vanilla cake',
    price: '₹500 / ₹900',
    priceValue: 500,
    unit: '500g / 1kg',
    image: '/products/cakes/vanilla_1.jpeg',
    available: true
  },
  {
    name: 'Vanilla Cake (Eggless Premium)',
    description: 'Vanilla cake',
    price: '₹550 / ₹1000',
    priceValue: 550,
    unit: '500g / 1kg',
    image: '/products/cakes/vanilla_2.jpeg',
    available: true
  },

  {
    name: 'Chocolate Cake (Premix Basic)',
    description: 'Chocolate cake',
    price: '₹450 / ₹800',
    priceValue: 450,
    unit: '500g / 1kg',
    image: '/products/cakes/chocolate.jpg',
    available: true
  },
  {
    name: 'Chocolate Cake (Premium)',
    description: 'Chocolate cake',
    price: '₹550 / ₹1000',
    priceValue: 550,
    unit: '500g / 1kg',
    image: '/products/cakes/chocolate_1.jpeg',
    available: true
  },
  {
    name: 'Chocolate Cake (Eggless Premium)',
    description: 'Chocolate cake',
    price: '₹600 / ₹1100',
    priceValue: 600,
    unit: '500g / 1kg',
    image: '/products/cakes/chocolate_2.jpeg',
    available: true
  },

  {
    name: 'Strawberry Cake (Premix Basic)',
    description: 'Strawberry cake',
    price: '₹400 / ₹700',
    priceValue: 400,
    unit: '500g / 1kg',
    image: '/products/cakes/strawberry.jpg',
    available: true
  },
  {
    name: 'Strawberry Cake (Premium)',
    description: 'Strawberry cake',
    price: '₹500 / ₹900',
    priceValue: 500,
    unit: '500g / 1kg',
    image: '/products/cakes/strawberry_1.jpeg',
    available: true
  },
  {
    name: 'Strawberry Cake (Eggless Premium)',
    description: 'Strawberry cake',
    price: '₹550 / ₹1000',
    priceValue: 550,
    unit: '500g / 1kg',
    image: '/products/cakes/strawberry_2.jpg',
    available: true
  },

  {
    name: 'Pineapple Cake (Premix Basic)',
    description: 'Pineapple cake',
    price: '₹450 / ₹800',
    priceValue: 450,
    unit: '500g / 1kg',
    image: '/products/cakes/pineapple.jpeg',
    available: true
  },
  {
    name: 'Pineapple Cake (Premium)',
    description: 'Pineapple cake',
    price: '₹550 / ₹1000',
    priceValue: 550,
    unit: '500g / 1kg',
    image: '/products/cakes/pineapple_1.jpeg',
    available: true
  },
  {
    name: 'Pineapple Cake (Eggless Premium)',
    description: 'Pineapple cake',
    price: '₹600 / ₹1100',
    priceValue: 600,
    unit: '500g / 1kg',
    image: '/products/cakes/pineapple_2.jpg',
    available: true
  },

  {
    name: 'Blueberry Cake (Premix Basic)',
    description: 'Blueberry cake',
    price: '₹400 / ₹700',
    priceValue: 400,
    unit: '500g / 1kg',
    image: '/products/cakes/blueberry.jpg',
    available: true
  },
  {
    name: 'Blueberry Cake (Premium)',
    description: 'Blueberry cake',
    price: '₹500 / ₹900',
    priceValue: 500,
    unit: '500g / 1kg',
    image: '/products/cakes/blueberry_1.jpg',
    available: true
  },
  {
    name: 'Blueberry Cake (Eggless Premium)',
    description: 'Blueberry cake',
    price: '₹550 / ₹1000',
    priceValue: 550,
    unit: '500g / 1kg',
    image: '/products/cakes/blueberry_2.jpg',
    available: true
  },

  {
    name: 'Black Forest Cake(premix basic)',
    description: 'Black Forest cake',
    price: '₹500 / ₹900',
    priceValue: 500,
    unit: '500g / 1kg',
    image: '/products/cakes/blackforest.jpg',
    available: true
  },
  {
    name: 'Black Forest Cake (Premium)',
    description: 'Black Forest cake',
    price: '₹600 / ₹1100',
    priceValue: 600,
    unit: '500g / 1kg',
    image: '/products/cakes/blackforest_1.jpg',
    available: true
  },
  {
    name: 'Black Forest Cake (Eggless premium)',
    description: 'Black Forest cake',
    price: '₹650 / ₹1200',
    priceValue: 650,
    unit: '500g / 1kg',
    image: '/products/cakes/blackforest_2.jpg',
    available: true
  },

  {
    name: 'White Forest Cake(premix basic)',
    description: 'White Forest cake',
    price: '₹500 / ₹900',
    priceValue: 500,
    unit: '500g / 1kg',
    image: '/products/cakes/whiteforest.jpg',
    available: true
  },
  {
    name: 'White Forest Cake (Premium)',
    description: 'White Forest cake',
    price: '₹600 / ₹1100',
    priceValue: 600,
    unit: '500g / 1kg',
    image: '/products/cakes/whiteforest_1.jpg',
    available: true
  },
  {
    name: 'White Forest Cake (Eggless Premium)',
    description: 'White Forest cake',
    price: '₹650 / ₹1200',
    priceValue: 650,
    unit: '500g / 1kg',
    image: '/products/cakes/whiteforest_2.jpg',
    available: true
  },

  {
    name: 'Butterscotch Cake(premix basic)',
    description: 'Butterscotch cake',
    price: '₹500 / ₹900',
    priceValue: 500,
    unit: '500g / 1kg',
    image: '/products/cakes/butterscotch.jpg',
    available: true
  },
  {
    name: 'Butterscotch Cake (Premium)',
    description: 'Butterscotch cake',
    price: '₹600 / ₹1100',
    priceValue: 600,
    unit: '500g / 1kg',
    image: '/products/cakes/butterscotch_1.jpg',
    available: true
  },
  {
    name: 'Butterscotch Cake (Eggless Premium)',
    description: 'Butterscotch cake',
    price: '₹650 / ₹1200',
    priceValue: 650,
    unit: '500g / 1kg',
    image: '/products/cakes/butterscotch_2.jpg',
    available: true
  },
  {
  name: 'Red Velvet Cake (Premix Basic)',
  description: 'Red Velvet cake',
  price: '₹600 / ₹1100',
  priceValue: 600,
  unit: '500g / 1kg',
  image: '/products/cakes/redvelvet.jpg',
  available: true
},
{
  name: 'Red Velvet Cake (Premium)',
  description: 'Red Velvet cake',
  price: '₹700 / ₹1300',
  priceValue: 700,
  unit: '500g / 1kg',
  image: '/products/cakes/redvelvet_1.jpg',
  available: true
},
{
  name: 'Red Velvet Cake (Eggless Premium)',
  description: 'Red Velvet cake',
  price: '₹750 / ₹1400',
  priceValue: 750,
  unit: '500g / 1kg',
  image: '/products/cakes/redvelvet_2.jpg',
  available: true
},

{
  name: 'Chocolate Truffle Cake (Premix Basic)',
  description: 'Chocolate Truffle cake',
  price: '₹650 / ₹1200',
  priceValue: 650,
  unit: '500g / 1kg',
  image: '/products/cakes/chocolatetruffle.jpg',
  available: true
},
{
  name: 'Chocolate Truffle Cake (Premium)',
  description: 'Chocolate Truffle cake',
  price: '₹750 / ₹1400',
  priceValue: 750,
  unit: '500g / 1kg',
  image: '/products/cakes/chocolatetruffle_1.jpg',
  available: true
},
{
  name: 'Chocolate Truffle Cake (Eggless Premium)',
  description: 'Chocolate Truffle cake',
  price: '₹800 / ₹1500',
  priceValue: 800,
  unit: '500g / 1kg',
  image: '/products/cakes/chocolatetruffle_2.jpg',
  available: true
},

{
  name: 'Rasmalai Cake (Premix Basic)',
  description: 'Rasmalai cake',
  price: '₹600 / ₹1000',
  priceValue: 600,
  unit: '500g / 1kg',
  image: '/products/cakes/rasmalai.jpg',
  available: true
},
{
  name: 'Rasmalai Cake (Premium)',
  description: 'Rasmalai cake',
  price: '₹700 / ₹1100',
  priceValue: 700,
  unit: '500g / 1kg',
  image: '/products/cakes/rasmalai_1.jpg',
  available: true
},
{
  name: 'Rasmalai Cake (Eggless Premium)',
  description: 'Rasmalai cake',
  price: '₹750 / ₹1200',
  priceValue: 750,
  unit: '500g / 1kg',
  image: '/products/cakes/rasmalai_2.jpg',
  available: true
},

{
  name: 'Chocolate Hazelnut Cake (Premix Basic)',
  description: 'Chocolate Hazelnut cake',
  price: '₹600 / ₹1000',
  priceValue: 600,
  unit: '500g / 1kg',
  image: '/products/cakes/hazelnut.jpg',
  available: true
},
{
  name: 'Chocolate Hazelnut Cake (Premium)',
  description: 'Chocolate Hazelnut cake',
  price: '₹700 / ₹1100',
  priceValue: 700,
  unit: '500g / 1kg',
  image: '/products/cakes/hazelnut_1.jpg',
  available: true
},
{
  name: 'Chocolate Hazelnut Cake (Eggless Premium)',
  description: 'Chocolate Hazelnut cake',
  price: '₹750 / ₹1200',
  priceValue: 750,
  unit: '500g / 1kg',
  image: '/products/cakes/hazelnut_2.jpg',
  available: true
},

{
  name: 'Biscoff Filling Cake (Premix Basic)',
  description: 'Biscoff Filling cake',
  price: '₹650 / ₹1200',
  priceValue: 650,
  unit: '500g / 1kg',
  image: '/products/cakes/biscoff.jpg',
  available: true
},
{
  name: 'Biscoff Filling Cake (Premium)',
  description: 'Biscoff Filling cake',
  price: '₹750 / ₹1400',
  priceValue: 750,
  unit: '500g / 1kg',
  image: '/products/cakes/biscoff_1.jpg',
  available: true
},
{
  name: 'Biscoff Filling Cake (Eggless Premium)',
  description: 'Biscoff Filling cake',
  price: '₹800 / ₹1500',
  priceValue: 800,
  unit: '500g / 1kg',
  image: '/products/cakes/biscoff_2.jpg',
  available: true
},

{
  name: 'KitKat Cake (Premix Basic)',
  description: 'KitKat cake',
  price: '₹450 / ₹800',
  priceValue: 450,
  unit: '500g / 1kg',
  image: '/products/cakes/kitkat.jpg',
  available: true
},
{
  name: 'KitKat Cake (Premium)',
  description: 'KitKat cake',
  price: '₹550 / ₹1000',
  priceValue: 550,
  unit: '500g / 1kg',
  image: '/products/cakes/kitkat_1.jpg',
  available: true
},
{
  name: 'KitKat Cake (Eggless Premium)',
  description: 'KitKat cake',
  price: '₹600 / ₹1100',
  priceValue: 600,
  unit: '500g / 1kg',
  image: '/products/cakes/kitkat_2.jpg',
  available: true
},
],

  donuts: [
  {
    name: 'Chocolate Sprinkle Donuts (6 pcs)',
    description: 'Fresh chocolate donuts with colorful sprinkles',
    price: '₹250',
    priceValue: 250,
    unit: 'box',
    image: '/products/donuts/donut.jpg',
    available: true
  },
  {
    name: 'Chocolate Sprinkle Donuts (12 pcs)',
    description: 'Fresh chocolate donuts with colorful sprinkles',
    price: '₹480',
    priceValue: 480,
    unit: 'box',
    image: '/products/donuts/donut_1.jpg',
    available: true
  },
  {
    name: 'Chocolate Sprinkle Donuts (16 pcs)',
    description: 'Fresh chocolate donuts with colorful sprinkles',
    price: '₹620',
    priceValue: 620,
    unit: 'box',
    image: '/products/donuts/donut_2.jpg',
    available: true
  },
  {
    name: 'Chocolate Sprinkle Donuts (25 pcs)',
    description: 'Fresh chocolate donuts with colorful sprinkles',
    price: '₹900',
    priceValue: 900,
    unit: 'box',
    image: '/products/donuts/donut.jpg',
    available: true
  }
],
  muffins: [
  {
    name: 'Vanilla Muffins (6 pcs)',
    description: 'Soft vanilla muffins freshly baked',
    price: '₹270',
    priceValue: 270,
    unit: 'box',
    image: '/products/muffins/vanilla.jpg',
    available: true
  },
  {
    name: 'Vanilla Muffins (12 pcs)',
    description: 'Soft vanilla muffins freshly baked',
    price: '₹450',
    priceValue: 450,
    unit: 'box',
    image: '/products/muffins/vanilla.jpg',
    available: true
  },
  {
    name: 'Chocolate Muffins (6 pcs)',
    description: 'Rich chocolate muffins',
    price: '₹270',
    priceValue: 270,
    unit: 'box',
    image: '/products/muffins/chocolate.jpg',
    available: true
  },
  {
    name: 'Chocolate Muffins (12 pcs)',
    description: 'Rich chocolate muffins',
    price: '₹450',
    priceValue: 450,
    unit: 'box',
    image: '/products/muffins/chocolate.jpg',
    available: true
  },
  {
    name: 'Banana Muffins (6 pcs)',
    description: 'Fresh banana muffins',
    price: '₹270',
    priceValue: 270,
    unit: 'box',
    image: '/products/muffins/banana.jpg',
    available: true
  },
  {
    name: 'Banana Muffins (12 pcs)',
    description: 'Fresh banana muffins',
    price: '₹500',
    priceValue: 500,
    unit: 'box',
    image: '/products/muffins/banana.jpg',
    available: true
  }
],

 cupcakes: [
  {
    name: 'Vanilla Cupcakes (6 pcs)',
    description: 'Soft vanilla cupcakes',
    price: '₹300',
    priceValue: 300,
    unit: 'box',
    image: '/products/cupcakes/vanilla.jpg',
    available: true
  },
  {
    name: 'Vanilla Cupcakes (12 pcs)',
    description: 'Soft vanilla cupcakes',
    price: '₹500',
    priceValue: 500,
    unit: 'box',
    image: '/products/cupcakes/vanilla.jpg',
    available: true
  },
  {
    name: 'Chocolate Cupcakes (6 pcs)',
    description: 'Rich chocolate cupcakes',
    price: '₹300',
    priceValue: 300,
    unit: 'box',
    image: '/products/cupcakes/chocolate.jpg',
    available: true
  },
  {
    name: 'Chocolate Cupcakes (12 pcs)',
    description: 'Rich chocolate cupcakes',
    price: '₹500',
    priceValue: 500,
    unit: 'box',
    image: '/products/cupcakes/chocolate.jpg',
    available: true
  },
  {
    name: 'Coffee Cupcakes (6 pcs)',
    description: 'Fresh coffee flavored cupcakes',
    price: '₹350',
    priceValue: 350,
    unit: 'box',
    image: '/products/cupcakes/coffee.jpg',
    available: true
  },
  {
    name: 'Coffee Cupcakes (12 pcs)',
    description: 'Fresh coffee flavored cupcakes',
    price: '₹600',
    priceValue: 600,
    unit: 'box',
    image: '/products/cupcakes/coffee.jpg',
    available: true
  },
  {
    name: 'Red Velvet Cupcakes (6 pcs)',
    description: 'Premium red velvet cupcakes',
    price: '₹350',
    priceValue: 350,
    unit: 'box',
    image: '/products/cupcakes/redvelvet.jpg',
    available: true
  },
  {
    name: 'Red Velvet Cupcakes (12 pcs)',
    description: 'Premium red velvet cupcakes',
    price: '₹600',
    priceValue: 600,
    unit: 'box',
    image: '/products/cupcakes/redvelvet.jpg',
    available: true
  }
],
bento: [
  {
    name: 'Vanilla Bento Cake',
    description: 'Mini vanilla bento cake',
    price: '₹280',
    priceValue: 280,
    unit: 'cake',
    image: '/products/bento/vanilla.jpg',
    available: true
  },
  {
    name: 'Strawberry Bento Cake',
    description: 'Mini strawberry bento cake',
    price: '₹280',
    priceValue: 280,
    unit: 'cake',
    image: '/products/bento/strawberry.jpg',
    available: true
  },
  {
    name: 'Pineapple Bento Cake',
    description: 'Mini pineapple bento cake',
    price: '₹380',
    priceValue: 380,
    unit: 'cake',
    image: '/products/bento/pineapple.jpg',
    available: true
  },
  {
    name: 'Black Forest Bento Cake',
    description: 'Mini black forest bento cake',
    price: '₹420',
    priceValue: 420,
    unit: 'cake',
    image: '/products/bento/blackforest.jpg',
    available: true
  },
  {
    name: 'Chocolate Bento Cake',
    description: 'Mini chocolate bento cake',
    price: '₹420',
    priceValue: 420,
    unit: 'cake',
    image: '/products/bento/chocolate.jpg',
    available: true
  },
  {
    name: 'Butterscotch Bento Cake',
    description: 'Mini butterscotch bento cake',
    price: '₹450',
    priceValue: 450,
    unit: 'cake',
    image: '/products/bento/butterscotch.jpg',
    available: true
  },
  {
    name: 'Blueberry Bento Cake',
    description: 'Mini blueberry bento cake',
    price: '₹380',
    priceValue: 380,
    unit: 'cake',
    image: '/products/bento/blueberry.jpg',
    available: true
  },
  {
    name: 'Chocolate Truffle Bento Cake',
    description: 'Mini chocolate truffle bento cake',
    price: '₹500',
    priceValue: 500,
    unit: 'cake',
    image: '/products/bento/chocolate_truffle.jpg',
    available: true
  },
  {
    name: 'Red Velvet Bento Cake',
    description: 'Mini red velvet bento cake',
    price: '₹500',
    priceValue: 500,
    unit: 'cake',
    image: '/products/bento/redvelvet.jpg',
    available: true
  }
],

  brownies: [
  {
    name: 'Fudgy Brownies (3 pcs)',
    description: 'Rich fudgy chocolate brownies',
    price: '₹250',
    priceValue: 250,
    unit: 'box',
    image: '/products/brownies/fudge.jpg',
    available: true
  },
  {
    name: 'Fudgy Brownies (6 pcs)',
    description: 'Rich fudgy chocolate brownies',
    price: '₹450',
    priceValue: 450,
    unit: 'box',
    image: '/products/brownies/fudge.jpg',
    available: true
  },
  {
    name: 'Fudgy Brownies (9 pcs)',
    description: 'Rich fudgy chocolate brownies',
    price: '₹650',
    priceValue: 650,
    unit: 'box',
    image: '/products/brownies/fudge.jpg',
    available: true
  },

  {
    name: 'Nuts Brownies (3 pcs)',
    description: 'Chocolate brownies loaded with nuts',
    price: '₹280',
    priceValue: 280,
    unit: 'box',
    image: '/products/brownies/walnut.jpg',
    available: true
  },
  {
    name: 'Nuts Brownies (6 pcs)',
    description: 'Chocolate brownies loaded with nuts',
    price: '₹500',
    priceValue: 500,
    unit: 'box',
    image: '/products/brownies/walnut.jpg',
    available: true
  },
  {
    name: 'Nuts Brownies (9 pcs)',
    description: 'Chocolate brownies loaded with nuts',
    price: '₹700',
    priceValue: 700,
    unit: 'box',
    image: '/products/brownies/walnut.jpg',
    available: true
  },

  {
    name: 'Choco Chips Brownies (3 pcs)',
    description: 'Chocolate brownies with choco chips',
    price: '₹280',
    priceValue: 280,
    unit: 'box',
    image: '/products/brownies/choco_chips.jpg',
    available: true
  },
  {
    name: 'Choco Chips Brownies (6 pcs)',
    description: 'Chocolate brownies with choco chips',
    price: '₹500',
    priceValue: 500,
    unit: 'box',
    image: '/products/brownies/choco_chips.jpg',
    available: true
  },
  {
    name: 'Choco Chips Brownies (9 pcs)',
    description: 'Chocolate brownies with choco chips',
    price: '₹700',
    priceValue: 700,
    unit: 'box',
    image: '/products/brownies/choco_chips.jpg',
    available: true
  },

  {
    name: 'Double Chocolate Brownies (3 pcs)',
    description: 'Premium double chocolate brownies',
    price: '₹280',
    priceValue: 280,
    unit: 'box',
    image: '/products/brownies/double_chocolate.jpg',
    available: true
  },
  {
    name: 'Double Chocolate Brownies (6 pcs)',
    description: 'Premium double chocolate brownies',
    price: '₹500',
    priceValue: 500,
    unit: 'box',
    image: '/products/brownies/double_chocolate.jpg',
    available: true
  },
  {
    name: 'Double Chocolate Brownies (9 pcs)',
    description: 'Premium double chocolate brownies',
    price: '₹700',
    priceValue: 700,
    unit: 'box',
    image: '/products/brownies/double_chocolate.jpg',
    available: true
  }
],
dreamtin: [
  {
    name: 'Dream Tin Cake',
    description: 'Premium Dream Tin Cake',
    price: '₹600',
    priceValue: 600,
    unit: '1/2 kg',
    image: '/products/dreamtin/dreamtin.png',
    available: true
  }
]
};

// ─── REVIEWS ─────────────────────────────────────────────────────
export const REVIEWS = [
  { id: 1, name: 'Priya Sharma',    rating: 5, review: 'Absolutely amazing! The birthday cake was a masterpiece. Everyone loved it and couldn\'t stop complimenting!', date: 'May 2026', avatar: 'PS' },
  { id: 2, name: 'Rahul Nair',      rating: 5, review: 'Ordered a wedding cake and it exceeded all expectations. Beautifully crafted and absolutely delicious!', date: 'April 2026', avatar: 'RN' },
  { id: 3, name: 'Anitha Kumar',    rating: 5, review: 'The kunafa chocolates were simply heavenly. Perfect for gifting. I will definitely order again!', date: 'April 2026', avatar: 'AK' },
  { id: 4, name: 'Mohammed Farhan', rating: 5, review: 'Best custom cake in the city! They captured every single detail of our theme perfectly. Highly recommend!', date: 'March 2026', avatar: 'MF' },
  { id: 5, name: 'Deepa Menon',     rating: 4, review: 'Delicious brownies and muffins. Super fresh, perfectly soft and baked just right every single time.', date: 'March 2026', avatar: 'DM' },
  { id: 6, name: 'Sathish Reddy',   rating: 5, review: 'Sri Elite Cake House is our go-to for all family celebrations. Quality and taste never disappoints!', date: 'February 2026', avatar: 'SR' },
];

// ─── WHY CHOOSE US ───────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  { icon: '🌿', title: 'Fresh Ingredients',      desc: 'Only the finest, freshest quality ingredients go into every product we make.' },
  { icon: '🏠', title: 'Homemade Quality',       desc: 'Every item is baked with love and care, delivering that authentic homemade taste.' },
  { icon: '🎨', title: 'Custom Designs',         desc: 'Fully customized cakes tailored precisely to your vision, theme and occasion.' },
  { icon: '🥚', title: 'Egg & Eggless Options',  desc: 'We proudly offer both egg and eggless variants across our entire product range.' },
  { icon: '⭐', title: 'Premium Quality',        desc: 'Uncompromising quality standards that make every celebration truly special.' },
  { icon: '🚚', title: 'Timely Delivery',        desc: 'On-time delivery guaranteed — because your celebration should never be delayed.' },
];

export const PRICE_LIST = {
  cakes: [
    { name: 'Vanilla Cake', price: '₹400 / ₹700', unit: '500g / 1kg' },
    { name: 'Chocolate Cake', price: '₹450 / ₹800', unit: '500g / 1kg' },
    { name: 'Strawberry Cake', price: '₹400 / ₹700', unit: '500g / 1kg' },
    { name: 'Pineapple Cake', price: '₹450 / ₹800', unit: '500g / 1kg' },
    { name: 'Blueberry Cake', price: '₹400 / ₹700', unit: '500g / 1kg' },
    { name: 'Black Forest Cake', price: '₹500 / ₹900', unit: '500g / 1kg' },
    { name: 'White Forest Cake', price: '₹500 / ₹900', unit: '500g / 1kg' },
    { name: 'Butterscotch Cake', price: '₹500 / ₹900', unit: '500g / 1kg' },
    { name: 'Red Velvet Cake', price: '₹600 / ₹1100', unit: '500g / 1kg' },
    { name: 'Chocolate Truffle Cake', price: '₹650 / ₹1200', unit: '500g / 1kg' },
    { name: 'Rasmalai Cake', price: '₹600 / ₹1000', unit: '500g / 1kg' },
    { name: 'Chocolate Hazelnut Cake', price: '₹600 / ₹1000', unit: '500g / 1kg' },
    { name: 'Biscoff Filling Cake', price: '₹650 / ₹1200', unit: '500g / 1kg' },
    { name: 'KitKat Cake', price: '₹450 / ₹800', unit: '500g / 1kg' },
  ],

  bento: [
    { name: 'Vanilla Bento Cake', price: '₹280', unit: 'cake' },
    { name: 'Strawberry Bento Cake', price: '₹280', unit: 'cake' },
    { name: 'Pineapple Bento Cake', price: '₹380', unit: 'cake' },
    { name: 'Black Forest Bento Cake', price: '₹420', unit: 'cake' },
    { name: 'Chocolate Bento Cake', price: '₹420', unit: 'cake' },
    { name: 'Butterscotch Bento Cake', price: '₹450', unit: 'cake' },
    { name: 'Blueberry Bento Cake', price: '₹380', unit: 'cake' },
    { name: 'Chocolate Truffle Bento Cake', price: '₹500', unit: 'cake' },
    { name: 'Red Velvet Bento Cake', price: '₹500', unit: 'cake' },
  ],

  cupcakes: [
    { name: 'Vanilla Cupcakes (6 pcs)', price: '₹300', unit: 'box' },
    { name: 'Vanilla Cupcakes (12 pcs)', price: '₹500', unit: 'box' },
    { name: 'Chocolate Cupcakes (6 pcs)', price: '₹300', unit: 'box' },
    { name: 'Chocolate Cupcakes (12 pcs)', price: '₹500', unit: 'box' },
    { name: 'Coffee Cupcakes (6 pcs)', price: '₹350', unit: 'box' },
    { name: 'Coffee Cupcakes (12 pcs)', price: '₹600', unit: 'box' },
    { name: 'Red Velvet Cupcakes (6 pcs)', price: '₹350', unit: 'box' },
    { name: 'Red Velvet Cupcakes (12 pcs)', price: '₹600', unit: 'box' },
  ],

  muffins: [
    { name: 'Vanilla Muffins (6 pcs)', price: '₹270', unit: 'box' },
    { name: 'Vanilla Muffins (12 pcs)', price: '₹450', unit: 'box' },
    { name: 'Chocolate Muffins (6 pcs)', price: '₹270', unit: 'box' },
    { name: 'Chocolate Muffins (12 pcs)', price: '₹450', unit: 'box' },
    { name: 'Banana Muffins (6 pcs)', price: '₹270', unit: 'box' },
    { name: 'Banana Muffins (12 pcs)', price: '₹500', unit: 'box' },
  ],

  brownies: [
    { name: 'Fudgy Brownies (3 pcs)', price: '₹250', unit: 'box' },
    { name: 'Fudgy Brownies (6 pcs)', price: '₹450', unit: 'box' },
    { name: 'Fudgy Brownies (9 pcs)', price: '₹650', unit: 'box' },

    { name: 'Nuts Brownies (3 pcs)', price: '₹280', unit: 'box' },
    { name: 'Nuts Brownies (6 pcs)', price: '₹500', unit: 'box' },
    { name: 'Nuts Brownies (9 pcs)', price: '₹700', unit: 'box' },

    { name: 'Choco Chips Brownies', price: 'Price on Request', unit: '' },
    { name: 'Double Chocolate Brownies', price: 'Price on Request', unit: '' },
  ],

  donuts: [
    { name: 'Chocolate Sprinkle Donuts (6 pcs)', price: '₹250', unit: 'box' },
    { name: 'Chocolate Sprinkle Donuts (12 pcs)', price: '₹480', unit: 'box' },
    { name: 'Chocolate Sprinkle Donuts (16 pcs)', price: '₹620', unit: 'box' },
    { name: 'Chocolate Sprinkle Donuts (25 pcs)', price: '₹900', unit: 'box' },
  ],

  dreamtin: [
    { name: 'Dream Tin Cake', price: '₹600', unit: '1/2 kg' },
  ],
};