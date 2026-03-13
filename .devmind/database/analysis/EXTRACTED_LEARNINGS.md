# Extracted Learnings

Generated: 2026-03-13T12:54:46.908Z

## architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

## architecture

since nyc uses this module to output coverage, any lines

## architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

## codebase

__ if source values arrive endlessly and faster than their

## codebase

__ If the source Observable emits Observables quickly and

## codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

## codebase

'>>> 0' keeps 32-bit num positive

## codebase

{@link iconv.decode} converts the string to Buffer regardless

## codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

## codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

## codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

## codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

## codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

## codebase

0 is a valid value, means "don't call _read preemptively ever"

## codebase

0 is a valid value, means that we always return false if

## codebase

At somepoint, we should investigate the performance implications here, and look

## codebase

Be careful editing this code! It's been tuned for performance

## codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

## codebase

cells should always exist - some tests don't fill it in though

## codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

## codebase

Clean this up when we refactor schedulers mid-version-8 or so

## codebase

codepoint is a signed int32 and can be negative

## codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

## codebase

consider removing this check. The only way to cause this would be to

## codebase

conversions should only return primitive values (i.e. arrays, or

