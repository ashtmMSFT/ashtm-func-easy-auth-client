const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ?? "INVALID_ENVIRONMENT_USED_WHEN_BUILDING";

export async function getEasyAuthSessionToken(accessToken: string) {
  return fetch(`${API_BASE_URL}/.auth/login/aad`, {
    method: "post",
    body: JSON.stringify({ access_token: accessToken }),
  })
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.authenticationToken)
    .catch((error) => {
      console.log(`>>> ERROR: ${error}`);
    });
}

export async function getApiOutput(accessToken: string) {
  return getEasyAuthSessionToken(accessToken).then((sessionToken) => {
    if (!sessionToken) {
      return "error: No EasyAuth session token";
    }

    return fetch(`${API_BASE_URL}/api/HelloWorld`, { headers: [["X-ZUMO-AUTH", sessionToken]] })
      .then((response) => response.text())
      .catch((error) => {
        console.log(`>>> ERROR: ${error}`);
      });
  });
}
