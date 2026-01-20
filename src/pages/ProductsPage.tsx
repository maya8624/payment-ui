import React from "react";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../types/product";

const dummyProducts: Product[] = [
  { id: 1, name: "Product A", price: 25 },
  { id: 2, name: "Product B", price: 40 },
  { id: 3, name: "Product C", price: 15 },
  { id: 4, name: "Product D", price: 30 },
];

export default function ProductsPage() {
  const add = useCartStore((s) => s.add);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {dummyProducts.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {p.name}
            </h2>
            <p className="text-gray-700 text-lg">${p.price}</p>
          </div>

          <button
            onClick={() => add(p)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
