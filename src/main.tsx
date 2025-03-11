import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import App from "./App.tsx";
import "./i18n"; // Import i18n configuration
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import { store } from "./store";
import { AppProvider } from "./contexts/app-context.tsx";
import { ThemeProvider } from "./contexts/theme-context.tsx";

import { initRequest } from "./services/initRequest.ts";
initRequest();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ToastContainer />
          <ThemeProvider>
            <AppProvider>
              <App />
            </AppProvider>
          </ThemeProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </StrictMode>
);
