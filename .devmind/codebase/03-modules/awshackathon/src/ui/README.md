# Module: ui

## Contents
- `banner.js`
- `panel.js`
- `table.js`
- `theme.js`

## Interface (Skeleton View)

```js
// banner.js
export function showBanner();
export function showMiniHeader(title);
```

```js
// panel.js
export function infoPanel(content, title = '', borderColor = 'cyan');
export function successPanel(content, title = 'SUCCESS');
export function errorPanel(content, suggestion = '');
export function warningPanel(content, title = 'WARNING');
export function printPanel(content, title = '', borderColor = 'cyan');
export function printSuccess(content, title = 'SUCCESS');
export function printError(content, suggestion = '');
```

```js
// table.js
export function makeTable(headers, options = {});
export function memoriesTable(memories);
export function sessionsTable(sessions);
```

```js
// theme.js
export export default theme;;
```
