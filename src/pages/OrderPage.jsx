import { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { WHATSAPP_NUMBER } from "../data/siteData";

import { generateOrderId } from "../services/orderService";
import { db } from "../lib/firebase";
import Swal from "sweetalert2";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
export default function OrderPage() {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/" replace />;
  }

  const { product, category } = state;
  const [formData, setFormData] = useState({
  // Customer
  customerName: "",
  phone: "",
  email: "",

  // Delivery
  deliveryType: "Home Delivery",
  address: "",
  landmark: "",
  city: "",
  pincode: "",
  deliveryDate: "",
  deliveryTime: "",

  // Cake
  weight: "",
  flavour: "",
  shape: "",
  eggType: "",
  cakeMessage: "",
  instructions: "",
});
async function handlePlaceOrder() {

  // Customer Validation
  if (!formData.customerName.trim()) {
    return Swal.fire("Missing Details", "Please enter your full name.", "warning");
  }

  if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    return Swal.fire("Invalid Mobile Number", "Please enter a valid 10-digit mobile number.", "warning");
  }

  if (!formData.address.trim()) {
    return Swal.fire("Missing Details", "Please enter your delivery address.", "warning");
  }

  if (!formData.city.trim()) {
    return Swal.fire("Missing Details", "Please enter your city.", "warning");
  }

  if (!formData.pincode.trim()) {
    return Swal.fire("Missing Details", "Please enter your pincode.", "warning");
  }

  if (!formData.deliveryDate) {
    return Swal.fire("Missing Details", "Please select a delivery date.", "warning");
  }

  if (!formData.deliveryTime) {
    return Swal.fire("Missing Details", "Please select a delivery time.", "warning");
  }

  // Cake Details Validation (Only Cakes & Bento)
  if (category === "cakes" || category === "bento") {

    if (!formData.weight) {
      return Swal.fire("Missing Details", "Please select the cake weight.", "warning");
    }

    if (!formData.flavour.trim()) {
      return Swal.fire("Missing Details", "Please enter the cake flavour.", "warning");
    }

    if (!formData.shape) {
      return Swal.fire("Missing Details", "Please select the cake shape.", "warning");
    }

    if (!formData.eggType) {
      return Swal.fire("Missing Details", "Please select Egg or Eggless.", "warning");
    }
  }

  try {

    const orderId = await generateOrderId();

    await setDoc(doc(db, "orders", orderId), {
      orderId,

      customerName: formData.customerName,
      phone: formData.phone,
      email: formData.email,

      deliveryType: formData.deliveryType,
      address: formData.address,
      landmark: formData.landmark,
      city: formData.city,
      pincode: formData.pincode,
      deliveryDate: formData.deliveryDate,
      deliveryTime: formData.deliveryTime,

      weight: formData.weight,
      flavour: formData.flavour,
      shape: formData.shape,
      eggType: formData.eggType,
      cakeMessage: formData.cakeMessage,
      instructions: formData.instructions,

      product,
      category,

      status: "Pending",

      createdAt: serverTimestamp(),
    });

    const shopPhone = WHATSAPP_NUMBER.replace(/\D/g, "");

    const message = `🎂 *NEW ORDER*

🆔 Order ID
${orderId}

👤 Customer
${formData.customerName}

📞 Phone
${formData.phone}

📧 Email
${formData.email || "Not Provided"}

🍰 Product
${product.name}

📂 Category
${category}

💰 Price
${product.price}

🚚 Delivery Type
${formData.deliveryType}

📍 Address
${formData.address}

🏙️ City
${formData.city}

📮 Pincode
${formData.pincode}

📅 Delivery Date
${formData.deliveryDate}

⏰ Delivery Time
${formData.deliveryTime}

🎂 Weight
${formData.weight || "-"}

🍫 Flavour
${formData.flavour || "-"}

🔷 Shape
${formData.shape || "-"}

🥚 Egg Preference
${formData.eggType || "-"}

✍️ Cake Message
${formData.cakeMessage || "-"}

📝 Instructions
${formData.instructions || "-"}`;

    window.open(
      `https://wa.me/${shopPhone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    Swal.fire(
      "Order Sent!",
      `Your Order ID is ${orderId}`,
      "success"
    );

  } catch (error) {
    console.error(error);
    Swal.fire(
      "Error",
      "Failed to place your order.",
      "error"
    );
  }
}

  return (
    <main className="min-h-screen bg-[#FFFDF9] pt-40 pb-12 px-6">
      <section className="max-w-5xl mx-auto">
        {/* Page Title */}
        <header className="mb-10 text-center">
  <h1 className="text-4xl font-bold text-[#3E1F00]">
    Complete Your Order
  </h1>

  <p className="mt-3 text-[#8B5E3C]">
    Please fill in your details to place your order.
  </p>
</header>   

        {/* Product Summary */}
        <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#3E1F00] mb-6">
            Product Summary
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 rounded-xl object-cover border border-[#E5E5E5] shadow-sm"
            />

            <div className="space-y-2 self-center text-[#3E1F00]">

              <p>
  <strong>Product:</strong> {product.name}
</p>

<p>
  <strong>Category:</strong> {category}
</p>

<p>
  <strong>Price:</strong> {product.price}
</p>

{product.weight && (
  <p>
    <strong>Weight:</strong> {product.weight}
  </p>
)}

            </div>

          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border border-[#F1E6D2] p-8 mb-8">

  <h2 className="text-2xl font-semibold text-[#3E1F00] mb-8">
    Customer Information
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Customer Name */}
    <div>
      <label
        htmlFor="customerName"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Full Name *
      </label>

      <input
  id="customerName"
  type="text"
  placeholder="Enter your full name"
  value={formData.customerName}
  onChange={(e) =>
    setFormData({
      ...formData,
      customerName: e.target.value,
    })
  }
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
/>
    </div>

    {/* Phone */}
    <div>
      <label
        htmlFor="phone"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Mobile Number *
      </label>

      <input
  id="phone"
  type="tel"
  placeholder=""
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
/>
    </div>

    {/* Email */}
    <div className="md:col-span-2">
      <label
        htmlFor="email"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Email Address (Optional)
      </label>

      <input
  id="email"
  type="email"
  placeholder="example@gmail.com"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
/>
    </div>

  </div>

</section>
{/* Delivery Details */}
<section className="bg-white rounded-2xl shadow-lg border border-[#F1E6D2] p-8 mb-8">

  <h2 className="text-2xl font-semibold text-[#3E1F00] mb-8">
    Delivery Details
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Delivery Type */}
    <div className="md:col-span-2">
      <label className="block mb-3 font-medium text-[#3E1F00]">
        Delivery Type *
      </label>

      <div className="flex gap-8">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
  type="radio"
  name="deliveryType"
  value="Home Delivery"
  checked={formData.deliveryType === "Home Delivery"}
  onChange={(e) =>
    setFormData({
      ...formData,
      deliveryType: e.target.value,
    })
  }
/>
          Home Delivery
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
  type="radio"
  name="deliveryType"
  value="Store Pickup"
  checked={formData.deliveryType === "Store Pickup"}
  onChange={(e) =>
    setFormData({
      ...formData,
      deliveryType: e.target.value,
    })
  }
/>
          Store Pickup
        </label>

      </div>
    </div>

    {/* Address */}
    <div className="md:col-span-2">
      <label
        htmlFor="address"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Delivery Address *
      </label>

      <textarea
  id="address"
  rows="3"
  placeholder="House No, Apartment, Street, Area"
  value={formData.address}
  onChange={(e) =>
    setFormData({
      ...formData,
      address: e.target.value,
    })
  }
  className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
/>
    </div>

    {/* Landmark */}
<div>
  <label
    htmlFor="landmark"
    className="block mb-2 font-medium text-[#3E1F00]"
  >
    Landmark (Optional)
  </label>

  <input
    id="landmark"
    type="text"
    placeholder="Nearby landmark"
    value={formData.landmark}
    onChange={(e) =>
      setFormData({
        ...formData,
        landmark: e.target.value,
      })
    }
    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
  />
</div>

    {/* City */}
    <div>
      <label
        htmlFor="city"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        City *
      </label>

      <input
        id="city"
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
      />
    </div>

    {/* Pincode */}
    <div>
      <label
        htmlFor="pincode"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Pincode *
      </label>

      <input
        id="pincode"
        type="text"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) =>
          setFormData({
            ...formData,
            pincode: e.target.value,
          })
        }
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
      />
    </div>

    {/* Delivery Date */}
    <div>
      <label
        htmlFor="deliveryDate"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Delivery Date *
      </label>

      <input
        id="deliveryDate"
        type="date"
        value={formData.deliveryDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            deliveryDate: e.target.value,
          })
        }
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
      />
    </div>

    {/* Delivery Time */}
    <div>
      <label
        htmlFor="deliveryTime"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Preferred Delivery Time *
      </label>

      <input
        id="deliveryTime"
        type="time"
        value={formData.deliveryTime}
        onChange={(e) =>
          setFormData({
            ...formData,
            deliveryTime: e.target.value,
          })
        }
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
      />
    </div>

  </div>

</section>

        {/* Cake Details */}
{(category === "cakes" || category === "bento") && (
<section className="bg-white rounded-2xl shadow-lg border border-[#F1E6D2] p-8 mb-8">
  <h2 className="text-2xl font-semibold text-[#3E1F00] mb-8">
    Cake Details
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Weight */}
    <div>
      <label
        htmlFor="weight"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Cake Weight *
      </label>

      <select
  id="weight"
  value={formData.weight}
  onChange={(e) =>
    setFormData({
      ...formData,
      weight: e.target.value,
    })
  }
  className="w-full h-14 rounded-xl border border-[#D8C3A5] bg-white px-4 text-[#3E1F00] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C8944A] focus:border-[#C8944A] transition-all"
>
        <option value="">Select Weight</option>
        <option>500 g</option>
        <option>1 kg</option>
        <option>1.5 kg</option>
        <option>2 kg</option>
        <option>3 kg</option>
        <option>Custom Weight</option>
      </select>
    </div>

    {/* Flavour */}
    <div>
      <label
        htmlFor="flavour"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Flavour *
      </label>

      <input
        id="flavour"
        type="text"
        placeholder="Chocolate, Vanilla..."
        value={formData.flavour}
        onChange={(e) =>
          setFormData({
            ...formData,
            flavour: e.target.value,
          })
        }
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8944A]"
      />
    </div>

    {/* Shape */}
    <div>
      <label
        htmlFor="shape"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Cake Shape *
      </label>

      <select
  id="shape"
  value={formData.shape}
  onChange={(e) =>
    setFormData({
      ...formData,
      shape: e.target.value,
    })
  }
  className="w-full h-14 rounded-xl border border-[#D8C3A5] bg-white px-4 text-[#3E1F00] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C8944A] focus:border-[#C8944A] transition-all"
>
        <option value="">Select Shape</option>
        <option>Round</option>
        <option>Square</option>
        <option>Heart</option>
        <option>Rectangle</option>
        <option>Custom Shape</option>
      </select>
    </div>

    {/* Egg Preference */}
    <div>
      <label
        htmlFor="eggType"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Egg Preference *
      </label>

      <select
  id="eggType"
  value={formData.eggType}
  onChange={(e) =>
    setFormData({
      ...formData,
      eggType: e.target.value,
    })
  }
  className="w-full h-14 rounded-xl border border-[#D8C3A5] bg-white px-4 text-[#3E1F00] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C8944A] focus:border-[#C8944A] transition-all"
>
        <option value="">Select</option>
        <option>Egg</option>
        <option>Eggless</option>
      </select>
    </div>

    {/* Cake Message */}
    <div className="md:col-span-2">
      <label
        htmlFor="cakeMessage"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Message on Cake
      </label>

      <input
  id="cakeMessage"
  type="text"
  value={formData.cakeMessage}
  onChange={(e) =>
    setFormData({
      ...formData,
      cakeMessage: e.target.value,
    })
  }
  placeholder="Happy Birthday Rahul"
  className="w-full h-14 rounded-xl border border-[#D8C3A5] bg-white px-4 text-[#3E1F00] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C8944A] focus:border-[#C8944A] transition-all"
/>
    </div>

    {/* Special Instructions */}
    <div className="md:col-span-2">
      <label
        htmlFor="instructions"
        className="block mb-2 font-medium text-[#3E1F00]"
      >
        Special Instructions
      </label>

      <textarea
  id="instructions"
  rows="4"
  value={formData.instructions}
  onChange={(e) =>
    setFormData({
      ...formData,
      instructions: e.target.value,
    })
  }
  placeholder="Extra cream, less sugar, no nuts, photo cake, etc."
  className="w-full rounded-xl border border-[#D8C3A5] bg-white p-4 text-[#3E1F00] shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C8944A] focus:border-[#C8944A] transition-all"
/>
    </div>

  </div>

</section>
)}

{/* Place Order Button */}
<div className="flex justify-center mt-10 mb-10">
  <button
  type="button"
  onClick={handlePlaceOrder}
  className="bg-[#3E1F00] hover:bg-[#5A2E00] text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-lg transition-all duration-300"
>
  Place Order
</button>
</div>
</section>
    </main>
    );
}