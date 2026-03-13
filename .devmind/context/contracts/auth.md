# Auth Contract

- Token types: define access/refresh/session usage.
- Claim schema: define required claims (`sub`, `aud`, `iss`, `exp`, app claims).
- Validation rules: define skew, rotation, and revocation behavior.
- Enforcement points: define where auth is validated (gateway/service/both).

## Claims
- `sub`: principal id
- `aud`: audience
- `iss`: issuer
- `exp`: expiration
