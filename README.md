# promise-with-timeout [![npm version](https://img.shields.io/npm/v/promise-with-timeout.svg)](https://www.npmjs.com/package/promise-with-timeout)

Limit the time to resolve a promise.

## Installation

```
npm install --save promise-with-timeout
```

## Example

```javascript
import withTimeout from 'promise-with-timeout';

async function test() {
  // Throw an error if there is no response after 10 seconds:
  let response = await withTimeout(fetch('https://www.w3.org/'), 10000);
}
```

## License

MIT
