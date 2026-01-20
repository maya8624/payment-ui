import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        clientId:
          "AUm1biPUhANbRrlItpAYkkhs_4LlsvHQ197HrmUS-pRUushd-U5PCn6TFqWfZ9IG1_9kho_fiX2Ye3OU", // sandbox
        currency: "AUD",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PayPalScriptProvider>
  </React.StrictMode>,
);
