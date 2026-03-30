# Changelog

## 3.0.0 (2026-03-30)

### Breaking Changes
- Minimum Node.js version is now **22** (previously 10)
- Removed **NATS Streaming (STAN)** transporter option (deprecated upstream)
- Replaced `kafka-node` with `@platformatic/kafka`
- ESLint migrated to **flat config** format (`eslint.config.js`)
- Jest upgraded from v25 to **v30**

### Features
- Updated to **Moleculer v0.15**
- Added **Docker Compose** file with service dependencies (NATS, Redis, MQTT, RabbitMQ, Kafka)
- Added `docker-compose.env` for environment configuration

### Updates
- Updated all dependencies to latest versions
  - `moleculer` ^0.14.0 → ^0.15.0
  - `moleculer-repl` ^0.6.2 → ^0.8.0
  - `eslint` ^6.8.0 → ^9.24.0
  - `jest` ^25.1.0 → ^30.3.0
  - `nats` ^1.3.2 → ^2.29.3
  - `mqtt` ^3.0.0 → ^5.15.1
  - `amqplib` ^0.5.5 → ^1.0.2
  - `ioredis` ^4.14.1 → ^5.10.1
- Docker image updated from `node:16-alpine` to `node:22-alpine`
- Dockerfile uses `npm ci` instead of `npm install`
- VSCode launch config: cross-platform paths, updated from `workspaceRoot` to `workspaceFolder`
- Updated all documentation links from 0.14 to 0.15
- Removed `rest` property from greeter service actions (no API gateway in nano template)
- Removed `jest-cli` from devDependencies (redundant with `jest`)

### Dev
- Updated `moleculer-cli` ^0.7.0 → ^0.9.1
- Updated `rimraf` ^3.0.1 → ^6.1.3
