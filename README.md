# cv2talk-backend

## Setup

Set up environment variables in `.env`, then install dependencies:

```bash
npm install
```

## Run Services (DB & Cache)

```bash
docker compose up -d db cache
```

## Run Application

```bash
npm run start:dev
```

## Migrations

**Create**

```bash
npm run migration:create migrationName
```

**Generate**

```bash
npm run migration:generate migrationName
```

**Run**

```bash
npm run migration:run
```

**Revert**

```bash
npm run migration:revert
```
