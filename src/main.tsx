import "@/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import "./i18n"; // Import i18n configuration
import i18n from "./i18n";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppProvider } from "./contexts/app-context.tsx";
import { store } from "./store";

import { initRequest } from "./services/initRequest.ts";
initRequest();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ToastContainer />
          <AppProvider>
            <App />
          </AppProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);
