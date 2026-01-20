import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function Header() {
  const items = useCartStore((s) => s.items);
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        background: "#0070ba",
        color: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h1 style={{ margin: 0 }}>MyShop</h1>
      </Link>
      <Link
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Cart ({totalCount})
      </Link>
    </header>
  );
}
