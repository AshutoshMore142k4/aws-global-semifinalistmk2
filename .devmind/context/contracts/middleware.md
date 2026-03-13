# Middleware Contract

- Canonical signature: define one middleware signature and keep all helpers aligned.
- Error strategy: define throw/return convention.
- Response ownership: define whether middleware writes response or returns data.
- Helper wrappers: list approved wrappers only.

## Canonical Signature
`(ctx, next)` (or project standard) - update all callsites consistently.
