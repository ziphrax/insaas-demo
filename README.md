# Insurance as a Service - Demo

This is a demo application that shows how an insurance as a service solution could be built in a short amount of time.

InsaaS - Logical Model Hierarchy
- User
    - Affinity
        - Products
            - policies
                - quote
                - claims

## Services

The InsaaS solution has a complex domain and so is broken up into a number of sub domains. Each of which is managed by it's own microservice.

### Claim

The claims service manages claims.

### InsaaS

The insaas service manages affinities, products and tier limits for a customer.

### Policy

The policy service manages policies.

### Quote

The quote service generates quotes.

### Workflow

The workflow service orchestrates complex workflows that take place over multiple sub domains.