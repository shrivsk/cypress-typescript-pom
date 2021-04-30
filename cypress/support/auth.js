/// <reference types="cypress" />
// ***********************************************
// import authsetting from "./authsetting.json";
/* 
const { 
  apiScopes,
  authority,
  clientId,
  clientSecret,
  password,
  username,
} = authsetting;
const enviroment = "login.windoes.net"
const injectTokens = (tokenResponse) => {
  const idToken = decode(tokenResponse.id_token)

}
export const login = () => {
  return cy.visit("/").request({
    url: authority + "/oauth2/v2.e/token",
    method:"POST",
    body: {
      grant_type: "password",
      client_id: clientId,
      client_secret:clientSecret,
      username: username,
      password: password,
      scope:["openid profile"].concat(apiScopes).join("")
    },
    from :true,
  }); then((response)=> {
    injectTokens(response.body);
  })
  .reload();
}; */

/* 
Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: `https://login.microsoftonline.com/${Cypress.config("tenantId")}/oauth2/token`,
    form: true,
    body: {
      grant_type: "client_credentials",
      client_id: Cypress.config("clientId"),
      client_secret: Cypress.config("clientSecret"),
    },
  }).then(response => {
    const ADALToken = response.body.access_token;
    const expiresOn = response.body.expires_on;

    localStorage.setItem("adal.token.keys", `${Cypress.config("clientId")}|`);
    localStorage.setItem(`adal.access.token.key${Cypress.config("clientId")}`, ADALToken);
    localStorage.setItem(`adal.expiration.key${Cypress.config("clientId")}`, expiresOn);
    localStorage.setItem("adal.idtoken", ADALToken);
  });
}); */

import { runWithAdal } from "react-adal";
import { authContext } from "./auth"; // contains authentication config

const DO_NOT_LOGIN = false;

runWithAdal(
  authContext,
  () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  },
  DO_NOT_LOGIN,
);

function runWithAdal(authContext: AuthenticationContext, app: Function) {
  authContext.handleWindowCallback();

  if (window === window.parent || (window as any).Cypress) {
    if (!authContext.isCallback(window.location.hash)) {
      if (
        !authContext.getCachedToken(authContext.config.clientId) ||
        (!(window as any).Cypress && !authContext.getCachedUser())
      ) {
        authContext.login();
      } else {
        app();
      }
    }
  }
}

runWithAdal(authContext, () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});