# README

- Create project

```sh
yarn create vite vite-react --template react
cd vite-react
```

- Add dependencies

```sh
yarn add --dev jest
yarn add ky ky-universal
```

- Add test script

```json
"test": "jest",
```

- Run test

```sh
yarn test
```

- Add jest config at package.json

```json
"jest": {
    "transform": {},
    "transformIgnorePatterns": [
      "/node_modules/(?!(ky))"
    ]
  }
```

Add test:exp script

```json
"test:exp": "node --experimental-vm-modules node_modules/.bin/jest"
```

- Run test:exp
 
```sh
yarn test:exp
```
