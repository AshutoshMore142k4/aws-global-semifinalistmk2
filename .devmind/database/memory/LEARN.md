# Project Learnings
        
> Auto-generated on 2026-03-13T12:54:46.478Z

This file accumulates technical learnings, architectural decisions, and discovered patterns.

## Initial Schema Analysis

- **Tables:** 0
- **Database Type:** sqlite
- **Schema Name:** N/A

## Codebase Knowledge

- **Architecture:** (Pending analysis)
- **Patterns:** (Pending analysis)

## Patterns

See `BUSINESS_LOGIC.md` for detected patterns.

## Sessions

### Session 1 - 2026-03-13
- Initial schema generation
- Detected business patterns
- Created memory infrastructure

---

*Add new learnings below. Each session should append discoveries, edge cases, and best practices.*
## 2026-03-13T12:54:46.910Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:54:46.910Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:54:46.910Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:54:46.910Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:54:46.910Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:54:46.910Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:54:46.910Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:54:46.910Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:54:46.910Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:54:46.910Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:54:46.910Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:54:46.910Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:54:46.910Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:54:46.910Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:54:46.910Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:54:46.910Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:54:46.910Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:54:46.910Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:54:46.910Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:54:46.910Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:54:46.910Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:54:46.910Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:54:46.910Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:54:46.910Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:54:46.910Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
