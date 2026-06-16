// All images live inside the root-level "assets/" folder.
// Vite serves "assets/" as the public root, so paths start with "/" directly.
//
// FOLDER STRUCTURE:
// assets/
//   logo.png
//   hero_bg.jpg
//   products/
//     cakes/        → birthday_chocolate.jpg, wedding_white.jpg, etc.
//     donuts/       → chocolate.jpg, strawberry.jpg, oreo.jpg, nutella.jpg
//     muffins/      → chocolate.jpg, vanilla.jpg, blueberry.jpg
//     cupcakes/     → chocolate.jpg, redvelvet.jpg, vanilla.jpg
//     brownies/     → fudge.jpg, walnut.jpg, oreo.jpg
//     dreamtin/       → pistachio.jpg, chocolate.jpg, giftbox.jpg
//   gallery/        → gallery_1.jpg, gallery_2.jpg, ...

export const IMAGES = {
  logo:   '/logo.png',
  heroBg: '/hero_bg.jpg',

  cakes: {
    birthday_chocolate:   '/products/cakes/birthday_chocolate.jpg',
    birthday_vanilla:     '/products/cakes/birthday_vanilla.jpg',
    birthday_rainbow:     '/products/cakes/birthday_rainbow.jpg',
    anniversary_redvelvet:'/products/cakes/anniversary_redvelvet.jpg',
    anniversary_photo:    '/products/cakes/anniversary_photo.jpg',
    wedding_white:        '/products/cakes/wedding_white.jpg',
    wedding_drip:         '/products/cakes/wedding_drip.jpg',
    babyshower_blue:      '/products/cakes/babyshower_blue.jpg',
    babyshower_pink:      '/products/cakes/babyshower_pink.jpg',
    theme_superhero:      '/products/cakes/theme_superhero.jpg',
    theme_princess:       '/products/cakes/theme_princess.jpg',
    theme_football:       '/products/cakes/theme_football.jpg',
    photo_single:         '/products/cakes/photo_single.jpg',
    photo_collage:        '/products/cakes/photo_collage.jpg',
    corporate_logo:       '/products/cakes/corporate_logo.jpg',
    corporate_office:     '/products/cakes/corporate_office.jpg',
  },

  donuts: {
    chocolate:  '/products/donuts/chocolate.jpg',
    strawberry: '/products/donuts/strawberry.jpg',
    oreo:       '/products/donuts/oreo.jpg',
    nutella:    '/products/donuts/nutella.jpg',
  },

  muffins: {
    chocolate:  '/products/muffins/chocolate.jpg',
    vanilla:    '/products/muffins/vanilla.jpg',
    blueberry:  '/products/muffins/blueberry.jpg',
  },

  cupcakes: {
    chocolate: '/products/cupcakes/chocolate.jpg',
    redvelvet: '/products/cupcakes/redvelvet.jpg',
    vanilla:   '/products/cupcakes/vanilla.jpg',
  },

  brownies: {
    fudge:  '/products/brownies/fudge.jpg',
    walnut: '/products/brownies/walnut.jpg',
    oreo:   '/products/brownies/oreo.jpg',
  },

  dreamtin: {
    pistachio: '/products/dreamtin/dreamtin.jpg',
    chocolate: '/products/dreamtin/dreamtin.jpg',
    giftbox:   '/products/dreamtin/dreamtin.jpg',
  },

  // Category card cover images — uses first product image of each category
  categories: {
    cakes:    '/products/cakes/birthday_chocolate.jpg',
    donuts:   '/products/donuts/chocolate.jpg',
    muffins:  '/products/muffins/chocolate.jpg',
    cupcakes: '/products/cupcakes/chocolate.jpg',
    brownies: '/products/brownies/fudge.jpg',
    dreamtin:   '/products/dreamtin/dreamtin.jpg',
  },
};
