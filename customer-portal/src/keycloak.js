import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "insaas",
  clientId: "customer-portal",
  clientSecret: "EN76BmhAMpkguDFtDhoNe1ZzRjQ6rP7A",
});

export default keycloak;
