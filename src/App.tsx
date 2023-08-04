import "./App.css";
import ApiOutput from "./components/ApiOutput";
import { useAccount, useMsal } from "@azure/msal-react";

export default function App() {
  // Set a default account for MSAL when the app loads.
  // This is safe because App is a child of MsalAuthenticationTemplate
  const { instance: msalClient, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  msalClient.setActiveAccount(account);

  return (
    <div className="App">
      <ApiOutput />
    </div>
  );
}
