import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AuthGuard from "./components/AuthGuard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProductsPage />} />

        {/* Protected Routes */}
        <Route
          path="/cart"
          element={
            <AuthGuard>
              <CartPage />
            </AuthGuard>
          }
        />
        <Route
          path="/checkout"
          element={
            <AuthGuard>
              <CheckoutPage />
            </AuthGuard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
