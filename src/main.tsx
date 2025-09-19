import { VemetricScript } from "@vemetric/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Importing Chakra
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VemetricScript token="6mch6IFJUzmURIux" />
    <ChakraProvider>
      <App></App>
    </ChakraProvider>
  </StrictMode>
);
