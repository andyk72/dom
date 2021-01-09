## Infos

Javascript dom module.  
Provides dom related logic.  

## Module dom.js

The module is located at

```
src/dom.js.
```

### Getting Started

See

```
src/dom-usage.js
```

for a getting started sample.

### Public Methods

```
find(
    selector: string,
    stopFindingAfterMs: number = 5000
): Promise<HTMLElement | null>

Returns the DOM HTMLElement identified by selector wrapped in a Promise.
```

```
innerHTML(
  selector: string,
  html: string,
  options: {
    mode: string | undefined
    wrap: string | undefined
  } | undefined
): HTMLElement

Writes html into the DOM HTMLElement identified by selector.
Use options to affect the write mode.
```

```
innerHTMLAppend (
  selector: string,
  html: string,
  options: {
    wrap: string | undefined
  } | undefined
): HTMLElement

Appends html into the DOM HTMLElement identified by selector.
Use options to affect the write mode.
```

```
innerHTMLPrepend (
  selector: string,
  html: string,
  options: {
    wrap: string | undefined
  } | undefined
): HTMLElement

Prepends html into the DOM HTMLElement identified by selector.
Use options to affect the write mode.
```

## Run development

```
> npm start
```

## Build sample application

```
> npm run build
```

## Serve sample application in web browser

```
> npm run build:serve
```