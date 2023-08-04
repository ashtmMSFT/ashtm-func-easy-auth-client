import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { loginRequest } from "../authConfig";
import { getApiOutput } from "../services/protectedApi";

export default function ApiOutput() {
  let [output, setOutput] = useState("Loading...");

  const { instance: msalClient } = useMsal();

  function fetchData() {
    msalClient.acquireTokenSilent(loginRequest).then((tokenResult) => {
      getApiOutput(tokenResult.accessToken).then((apiOutput) => {
        if (apiOutput) {
          setOutput(apiOutput);
        }
      });
    });
  }

  useEffect(fetchData, [msalClient]);

  return (
    <>
      <div>{output}</div>
      <button onClick={fetchData}>Refresh</button>
    </>
  );
}
