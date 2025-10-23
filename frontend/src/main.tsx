import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index.ts";
import { RouterProvider } from "react-router";
import router from "./routes.tsx";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster richColors closeButton position="bottom-right" />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
