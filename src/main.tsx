import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Config } from "./config/paypal";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        clientId: Config.clientId,
        currency: Config.currency,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PayPalScriptProvider>
  </React.StrictMode>,
);
