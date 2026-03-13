# Module: core

## Contents
- `analyzer.js`
- `db.js`
- `extractor.js`
- `scanner.js`

## Interface (Skeleton View)

```js
// analyzer.js
export function computeStats(sessions, memories);
```

```js
// db.js
export function getDb();
export function saveDb();
export function getDbPath();
export function getDevmindDir();
export function isInitialized();
export function requireInit();
```

```js
// extractor.js
/** Extract memories from raw AI chat text using compromise NLP.
Returns array of { content, tags, confidence } objects. */
export function extractMemories(text);
```

```js
// scanner.js
export function scanProject(cwd = process.cwd());
```
