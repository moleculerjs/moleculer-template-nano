[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# {{projectName}}
This is a [Moleculer](https://moleculer.services/)-based microservice. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

{{#docker}}
## Run in Docker

**Build Docker image**
```bash
$ docker build -t {{projectName}} .
```

**Start container**
```bash
$ docker run -d {{projectName}}
```
{{/docker}}

## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (with hot-reload & REPL)
- `npm run start`: Start production mode{{#lint}}
- `npm run lint`: Run ESLint{{/lint}}
- `npm run ci`: Run continuous test mode with watching
