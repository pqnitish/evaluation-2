import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ChakraProvider>
   
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
  </ChakraProvider>
  </BrowserRouter>
);
