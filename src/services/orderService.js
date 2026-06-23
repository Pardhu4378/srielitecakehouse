import { db } from "../lib/firebase";
import { doc, runTransaction } from "firebase/firestore";

export async function generateOrderId() {
  const counterRef = doc(db, "counters", "orders");

  const orderId = await runTransaction(db, async (transaction) => {
    const counterDoc = await transaction.get(counterRef);

    if (!counterDoc.exists()) {
      throw new Error("Counter document does not exist.");
    }

    const current = counterDoc.data().current || 0;
    const next = current + 1;

    transaction.update(counterRef, {
      current: next,
    });

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const orderNumber = String(next).padStart(4, "0");

    return `SECH-${year}${month}${day}-${orderNumber}`;
  });

  return orderId;
}