import ReactDOM from "react-dom/client";
import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/api/QueryClient.js";
import AppRouter from "./router/AppRouter.jsx";
import "./index.css";

const { ToastContainer } = createStandaloneToast();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ToastContainer />
    </QueryClientProvider>
  </ChakraProvider>
);
