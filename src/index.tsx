import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PublicClientApplication, InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, MsalProvider } from "@azure/msal-react";
import { msalConfig, loginRequest } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect} authenticationRequest={loginRequest}>
        <App />
      </MsalAuthenticationTemplate>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
