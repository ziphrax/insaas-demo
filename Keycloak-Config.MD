# Keycloak Config

1. Create a new realm 'insaas' with Display name 'Insurance as a Service
2. Realm -> Login -> enable User Registration, disable login with email
3. Realm -> Security Defences -> set Content-Security-Policy "frame-src 'self' http://localhost:3000 http://localhost:8080; frame-ancestors 'self'  http://localhost:3000 http://localhost:8080; object-src 'none';"
3. Create a new client called 'customer-portal'
4. Client -> customer-portal -> Settings ->  name 'Customer Portal, valid redirect URIs: *, web origins: *
5. Client -> customer-portal -> Settings -> Client Authentication off