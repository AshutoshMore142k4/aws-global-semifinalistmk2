# HTTP Contract

- Service ports: define canonical listen/exposed/proxy ports.
- Base paths: define canonical API base paths.
- Required headers: define auth/header format and ownership.
- Env names: define canonical env vars for port binding.

## Mapping Table
| Layer | Setting | Value | Source |
| --- | --- | --- | --- |
| app | listen port | TBD | app config |
| container | exposed port | TBD | container config |
| proxy/gateway | upstream port | TBD | infra config |
