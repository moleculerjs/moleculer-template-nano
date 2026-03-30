# Moleculer template: `nano`
:mortar_board: Minimal project template for one Moleculer microservice.

## Features
- Moleculer v0.15.x with `moleculer.config.js`
- Simple project with a demo `greeter` service
- Transporter & Cacher
- Docker & Docker Compose files
- Unit tests with [Jest](http://facebook.github.io/jest/)
- Lint with [ESLint](http://eslint.org/) (flat config)
- Launch file for debugging in [VSCode](https://code.visualstudio.com/)


## Install
To install use the [moleculer-cli](https://github.com/moleculerjs/moleculer-cli) tool.

```bash
$ moleculer init nano my-project
```

## Prompts
```
$ moleculer init nano my-project

Template repo: moleculerjs/moleculer-template-nano
? Select a transporter TCP
? Would you like use cache? No
? Would you like to enable metrics? Yes
? Would you like to enable tracing? Yes
? Add Docker & Docker Compose files? Yes
? Use ESLint to lint your code? Yes
Create 'my-project' folder...
? Would you like to run 'npm install'? Yes
```

## NPM scripts
- `npm run dev` - Start service.js with hot-reloading and REPL.
- `npm run lint` - Run linting
- `npm run ci` - Start testing in watch mode
- `npm start` - Start service.js in production mode
- `npm test` - Run tests & generate coverage report

## License
This template is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact
Copyright (c) 2016-2026 MoleculerJS

[![@moleculerjs](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)
