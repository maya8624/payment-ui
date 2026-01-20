import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clear);
  const navigate = useNavigate();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Checkout</h1>
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4"
          >
            <span className="text-gray-800 font-medium">
              {item.name} x {item.quantity}
            </span>
            <span className="text-gray-700">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="text-right text-xl font-semibold text-gray-800 mt-6">
        Total: ${total.toFixed(2)}
      </div>

      <div className="mt-6">
        <PayPalButtons
          style={{ layout: "horizontal", color: "blue", shape: "rect" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    value: total.toFixed(2),
                    currency_code: "AUD",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order!.capture();
            const payerName =
              details.purchase_units?.[0]?.shipping?.name?.full_name ||
              "Customer";

            alert(`Payment completed by ${payerName}`);
            clearCart();
            navigate("/");
          }}
          onError={(err) => {
            console.error(err);
            alert("Payment failed. Please try again.");
          }}
        />
      </div>
    </div>
  );
}
