import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const clear = useCartStore((s) => s.clear);
  const navigate = useNavigate();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Cart</h1>

      {items.length === 0 && (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <span className="text-gray-800 font-medium">
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            onClick={() => remove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <div className="text-right text-xl font-semibold text-gray-800 mt-4">
            Total: ${total}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => navigate("/checkout")}
            >
              Go to Checkout
            </button>

            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              onClick={clear}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
