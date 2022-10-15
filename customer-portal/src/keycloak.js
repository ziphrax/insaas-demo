import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "insaas",
  clientId: "customer-portal",
  clientSecret: "Zx8dZZK76Q9wuP74Dke8EcrRMmeoy01P",
});

export default keycloak;
