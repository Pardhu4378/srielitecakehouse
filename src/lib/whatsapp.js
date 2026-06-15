const WHATSAPP_NUMBER = '917795064442'; // +91 7795064442

export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

export function buildCakeMessage(cakeModel, occasion) {
  return `🎂 *Sri Elite Cake House — Cake Order*

*Selected Category:* Cakes
*Selected Cake Model:* ${cakeModel}
*Occasion:* ${occasion}

Thank you for contacting Sri Elite Cake House 😊

To help us prepare your cake order, please provide the following details:

👤 *Name:*
📱 *Mobile Number:*
📅 *Delivery/Pickup Date:*
📍 *Delivery Address (if required):*
🎉 *Occasion:*
🍰 *Cake Flavor:*
⚖️ *Weight Required:*
🥚 *Egg or Eggless:*
✍️ *Name/Text To Be Written:*
🖼️ *Reference Image:* (Please share image)
📝 *Special Instructions:*

Once we receive these details, we will confirm pricing and availability. ✨`;
}

export function buildDonutMessage(product) {
  return `🍩 *Sri Elite Cake House — Donut Order*

*Selected Product:* ${product}

Thank you for contacting Sri Elite Cake House 😊

Please provide the following details:

👤 *Name:*
📱 *Mobile Number:*
🔢 *Quantity:*
📅 *Delivery/Pickup Date:*
📍 *Delivery Address:*
🍫 *Additional Toppings:*
📝 *Special Instructions:*

We will get back to you shortly! 🎉`;
}

export function buildMuffinMessage(product) {
  return `🧁 *Sri Elite Cake House — Muffin Order*

*Selected Product:* ${product}

Thank you for contacting Sri Elite Cake House 😊

Please provide the following details:

👤 *Name:*
📱 *Mobile Number:*
🔢 *Quantity:*
📅 *Delivery/Pickup Date:*
📍 *Delivery Address:*
🍓 *Flavor:*
📝 *Special Instructions:*

We will get back to you shortly! 🎉`;
}

export function buildCupcakeMessage(product) {
  return `🧁 *Sri Elite Cake House — Cupcake Order*

*Selected Product:* ${product}

Thank you for contacting Sri Elite Cake House 😊

Please provide the following details:

👤 *Name:*
📱 *Mobile Number:*
🔢 *Quantity:*
📅 *Delivery/Pickup Date:*
📍 *Delivery Address:*
🍓 *Flavor:*
📝 *Special Instructions:*

We will get back to you shortly! 🎉`;
}

export function buildBrownieMessage(product) {
  return `🍫 *Sri Elite Cake House — Brownie Order*

*Selected Product:* ${product}

Thank you for contacting Sri Elite Cake House 😊

Please provide the following details:

👤 *Name:*
📱 *Mobile Number:*
🔢 *Quantity:*
📅 *Delivery/Pickup Date:*
📍 *Delivery Address:*
📝 *Special Instructions:*

We will get back to you shortly! 🎉`;
}

export function builddreamtinMessage(product) {
  return `🌟 *Sri Elite Cake House — dreamtin cakeOrder*

*Selected Product:* ${product}

Thank you for contacting Sri Elite Cake House 😊

Please provide the following details:

👤 *Name:*
📱 *Mobile Number:*
🔢 *Quantity:*
📅 *Delivery/Pickup Date:*
📍 *Delivery Address:*
📦 *Box Size:*
📝 *Special Instructions:*

We will get back to you shortly! 🎉`;
}

export function buildBentoMessage(product) {
  return `🎁 *Sri Elite Cake House — Bento Cake Order*

*Selected Product:* ${product}

Thank you for contacting Sri Elite Cake House 😊

Please provide the following details:

👤 *Name:*
📱 *Mobile Number:*
🔢 *Quantity:*
📅 *Delivery/Pickup Date:*
📍 *Delivery Address:*
🥚 *Egg or Eggless:*
✍️ *Name/Text To Be Written (Max 3-4 words):*
🎨 *Frosting/Color Theme:*
📝 *Special Instructions:*

We will get back to you shortly! 🎉`;
}

export function buildGeneralMessage() {
  return `Hello Sri Elite Cake House! 😊

I would like to place an order. Please assist me.`;
}

export function getMessageBuilder(category) {
  const builders = {
    cakes: buildCakeMessage,
    bento: buildBentoMessage,
    donuts: buildDonutMessage,
    muffins: buildMuffinMessage,
    cupcakes: buildCupcakeMessage,
    brownies: buildBrownieMessage,
    dreamtin: builddreamtinMessage,
  };
  return builders[category] || buildGeneralMessage;
}
