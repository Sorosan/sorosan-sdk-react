# The Sorosan SDK for React

Welcome to the Sorosan SDK (React), your key to unlocking a seamless development experience on the Stellar network. The Sorosan SDK (React) empowers developers to tap into the full potential of Stellar with unparalleled ease. As we embark on this exciting journey together, be sure to stay tuned for our upcoming features and releases. Give us a star and watch our progress to stay in the loop!

For usage in other node or web applications, check out [`@sorosan-sdk/core`](https://www.npmjs.com/package/@sorosan-sdk/core).

## Install

### To use as a module in a Node.js project

1. Install it using npm:
```bash
npm install --save @sorosan-sdk/react
```

2. require/import it in your JavaScript/Typescript:
```ts
// layout.tsx or app.tsx
import { SorosanProvider } from '@sorosan-sdk/react'

export default function Component() {
    const { sdk } = useSorosan();

    return (
        <SorosanProvider network="futurenet">
            {children}
        </SorosanProvider>
    )
}
```

3. use `useSorosanSDK()` hook to load in SDK in components
```ts
// Component.tsx
import { useState } from "react";
import { useSorosanSDK } from '@sorosan-sdk/react';

export const Component = () => {
    const { sdk } = useSorosanSDK();

    // ...
};
```

### To use as a module locally

1. Clone this repo
```bash
git clone https://github.com/sorosan/sorosan-sdk-react
```

1. Install packages and build
```bash
cd sorosan-sdk-react
npm i
npm run build
```
This should generate a `dist/` where you can use `SorosanProvider` in **React app**

## Testing

```bash
npm run test
```

## [Documentation](https://sorosan.github.io/sorosan-doc/)

Documentation source for repo can be found [here](https://github.com/Sorosan/sorosan-sdk/tree/master/sorosan-doc)

## Others

- [Sorosan App](https://sorosan-dapp.vercel.app/sdk)
- [Documentation](https://sorosan.github.io/sorosan-doc)
- [Core SDK](https://www.npmjs.com/package/@sorosan-sdk/core)
- [Sample App using Sorosan SDK](https://github.com/Sorosan/create-sorosan-app)