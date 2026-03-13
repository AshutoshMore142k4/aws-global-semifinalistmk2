# Module: utils

## Contents
- `format.js`
- `time.js`

## Interface (Skeleton View)

```js
// format.js
/** Truncate a string to maxLen, appending ellipsis if needed. */
export function truncate(str, maxLen = 50);
/** Normalize tags: split comma-separated string into trimmed array. */
export function parseTags(tagsInput);
/** Highlight occurrences of `query` in `text` using a chalk color fn. */
export function highlightMatch(text, query, colorFn);
/** Build a simple ASCII bar of given width, filled to `fraction`. */
export function asciiBar(fraction, width = 20, filledChar = '█', emptyChar = '░');
/** Capitalize first letter. */
export function capitalize(str);
```

```js
// time.js
export function today();
export function now();
export function formatDate(dateStr);
export function formatDuration(minutes);
export function dayOfWeek(dateStr);
/** Compute current streak and longest streak from sessions array.
Expects sessions to have { date: 'YYYY-MM-DD' }. */
export function computeStreaks(sessions);
export function getLast7Days();
```
