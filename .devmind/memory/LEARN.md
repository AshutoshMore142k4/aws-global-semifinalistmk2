# Project Learnings

> Accumulated technical learnings, architectural decisions, and discovered patterns.

## 2026-03-13T11:00:50.499Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T11:00:50.499Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T11:00:50.499Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T11:00:50.499Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T11:00:50.499Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T11:00:50.499Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T11:00:50.499Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T11:00:50.499Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T11:00:50.499Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T11:00:50.499Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T11:00:50.499Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T11:00:50.499Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T11:00:50.499Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T11:00:50.499Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T11:00:50.499Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T11:00:50.499Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T11:00:50.499Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T11:00:50.499Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T11:00:50.499Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T11:00:50.499Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T11:00:50.499Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T11:00:50.499Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T11:00:50.499Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T11:00:50.499Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T11:00:50.499Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T11:08:43.917Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T11:08:43.917Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T11:08:43.917Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T11:08:43.917Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T11:08:43.917Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T11:08:43.917Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T11:08:43.917Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T11:08:43.917Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T11:08:43.917Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T11:08:43.917Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T11:08:43.917Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T11:08:43.917Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T11:08:43.917Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T11:08:43.917Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T11:08:43.917Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T11:08:43.917Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T11:08:43.917Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T11:08:43.917Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T11:08:43.917Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T11:08:43.917Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T11:08:43.917Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T11:08:43.917Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T11:08:43.917Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T11:08:43.917Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T11:08:43.917Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T11:18:53.396Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T11:18:53.396Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T11:18:53.396Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T11:18:53.396Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T11:18:53.396Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T11:18:53.396Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T11:18:53.396Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T11:18:53.396Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T11:18:53.396Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T11:18:53.396Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T11:18:53.396Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T11:18:53.396Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T11:18:53.396Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T11:18:53.396Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T11:18:53.396Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T11:18:53.396Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T11:18:53.396Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T11:18:53.396Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T11:18:53.396Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T11:18:53.396Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T11:18:53.396Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T11:18:53.396Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T11:18:53.396Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T11:18:53.396Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T11:18:53.396Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T11:19:09.894Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T11:19:09.894Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T11:19:09.894Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T11:19:09.894Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T11:19:09.894Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T11:19:09.894Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T11:19:09.894Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T11:19:09.894Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T11:19:09.894Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T11:19:09.894Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T11:19:09.894Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T11:19:09.894Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T11:19:09.894Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T11:19:09.894Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T11:19:09.894Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T11:19:09.894Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T11:19:09.894Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T11:19:09.894Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T11:19:09.894Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T11:19:09.894Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T11:19:09.894Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T11:19:09.894Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T11:19:09.894Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T11:19:09.894Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T11:19:09.894Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T11:40:09.085Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T11:40:09.085Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T11:40:09.085Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T11:40:09.085Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T11:40:09.085Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T11:40:09.085Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T11:40:09.085Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T11:40:09.085Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T11:40:09.085Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T11:40:09.085Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T11:40:09.085Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T11:40:09.085Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T11:40:09.085Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T11:40:09.085Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T11:40:09.085Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T11:40:09.085Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T11:40:09.085Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T11:40:09.085Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T11:40:09.085Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T11:40:09.085Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T11:40:09.085Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T11:40:09.085Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T11:40:09.085Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T11:40:09.085Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T11:40:09.085Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T12:49:13.613Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:49:13.613Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:49:13.613Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:49:13.613Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:49:13.613Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:49:13.613Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:49:13.613Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:49:13.613Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:49:13.613Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:49:13.613Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:49:13.613Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:49:13.613Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:49:13.613Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:49:13.613Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:49:13.613Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:49:13.613Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:49:13.613Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:49:13.613Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:49:13.613Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:49:13.613Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:49:13.613Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:49:13.613Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:49:13.613Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:49:13.613Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:49:13.613Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T12:51:32.587Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:51:32.587Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:51:32.587Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:51:32.587Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:51:32.587Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:51:32.587Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:51:32.587Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:51:32.587Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:51:32.587Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:51:32.587Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:51:32.587Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:51:32.587Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:51:32.587Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:51:32.587Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:51:32.587Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:51:32.587Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:51:32.587Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:51:32.587Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:51:32.587Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:51:32.587Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:51:32.587Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:51:32.587Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:51:32.587Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:51:32.587Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:51:32.587Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T12:52:01.509Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:52:01.509Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:52:01.509Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:52:01.509Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:52:01.509Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:52:01.509Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:52:01.509Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:52:01.509Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:52:01.509Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:52:01.509Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:52:01.509Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:52:01.509Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:52:01.509Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:52:01.509Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:52:01.509Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:52:01.509Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:52:01.509Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:52:01.509Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:52:01.509Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:52:01.509Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:52:01.509Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:52:01.509Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:52:01.509Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:52:01.509Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:52:01.509Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T12:53:23.940Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:53:23.940Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:53:23.940Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:53:23.940Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:53:23.940Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:53:23.940Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:53:23.940Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:53:23.940Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:53:23.940Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:53:23.940Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:53:23.940Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:53:23.940Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:53:23.940Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:53:23.940Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:53:23.940Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:53:23.940Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:53:23.940Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:53:23.940Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:53:23.940Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:53:23.940Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:53:23.940Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:53:23.940Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:53:23.940Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:53:23.940Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:53:23.940Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T12:53:34.284Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:53:34.284Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:53:34.284Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:53:34.284Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:53:34.284Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:53:34.284Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:53:34.284Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:53:34.284Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:53:34.284Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:53:34.284Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:53:34.284Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:53:34.284Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:53:34.284Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:53:34.284Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:53:34.284Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:53:34.284Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:53:34.284Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:53:34.284Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:53:34.284Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:53:34.284Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:53:34.284Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:53:34.284Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:53:34.284Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:53:34.284Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:53:34.284Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T12:54:47.266Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:54:47.266Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:54:47.266Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:54:47.266Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:54:47.266Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:54:47.266Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:54:47.266Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:54:47.266Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:54:47.266Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:54:47.266Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:54:47.266Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:54:47.266Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:54:47.266Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:54:47.266Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:54:47.266Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:54:47.266Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:54:47.266Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:54:47.266Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:54:47.266Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:54:47.266Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:54:47.266Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:54:47.266Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:54:47.266Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:54:47.266Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:54:47.266Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
## 2026-03-13T12:54:51.906Z - architecture

Due to 'stream' module being pretty large (~100Kb, significant in browser environments)

---
## 2026-03-13T12:54:51.906Z - architecture

since nyc uses this module to output coverage, any lines

---
## 2026-03-13T12:54:51.906Z - architecture

Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add

---
## 2026-03-13T12:54:51.906Z - codebase

__ if source values arrive endlessly and faster than their

---
## 2026-03-13T12:54:51.906Z - codebase

__ If the source Observable emits Observables quickly and

---
## 2026-03-13T12:54:51.906Z - codebase

- Returns `unknown` if `Key` is not a property of `BaseType`, since TypeScript uses structural typing, and it cannot be guaranteed that extra properties unknown to the type system will exist at runtime

---
## 2026-03-13T12:54:51.906Z - codebase

'>>> 0' keeps 32-bit num positive

---
## 2026-03-13T12:54:51.906Z - codebase

{@link iconv.decode} converts the string to Buffer regardless

---
## 2026-03-13T12:54:51.906Z - codebase

`concatAll` is equivalent to `mergeAll` with concurrency parameter set

---
## 2026-03-13T12:54:51.906Z - codebase

`concatMap` is equivalent to `mergeMap` with concurrency parameter set

---
## 2026-03-13T12:54:51.906Z - codebase

`concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter

---
## 2026-03-13T12:54:51.906Z - codebase

`npm restart` will run the `stop` and `start` scripts if no `restart` script is provided

---
## 2026-03-13T12:54:51.906Z - codebase

<namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122')

---
## 2026-03-13T12:54:51.906Z - codebase

0 is a valid value, means "don't call _read preemptively ever"

---
## 2026-03-13T12:54:51.906Z - codebase

0 is a valid value, means that we always return false if

---
## 2026-03-13T12:54:51.906Z - codebase

At somepoint, we should investigate the performance implications here, and look

---
## 2026-03-13T12:54:51.906Z - codebase

Be careful editing this code! It's been tuned for performance

---
## 2026-03-13T12:54:51.906Z - codebase

cannot use `length < K_MAX_LENGTH` here because that fails when

---
## 2026-03-13T12:54:51.906Z - codebase

cells should always exist - some tests don't fill it in though

---
## 2026-03-13T12:54:51.906Z - codebase

Change prototype *after* Buffer.from is defined to workaround Chrome bug

---
## 2026-03-13T12:54:51.906Z - codebase

Clean this up when we refactor schedulers mid-version-8 or so

---
## 2026-03-13T12:54:51.906Z - codebase

codepoint is a signed int32 and can be negative

---
## 2026-03-13T12:54:51.906Z - codebase

codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations

---
## 2026-03-13T12:54:51.906Z - codebase

consider removing this check. The only way to cause this would be to

---
## 2026-03-13T12:54:51.906Z - codebase

conversions should only return primitive values (i.e. arrays, or

---
