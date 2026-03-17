# QR Generator Backend (NestJS)

## Setup

```bash
cd backend
npm install
cp .env.example .env   # optional
```

## Run

```bash
npm run start:dev
```

Server: `http://localhost:3000`

## API

### `POST /qr/png`

Generates a PNG image. Request body (JSON):

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | string | yes | Payload (URL, text, or `WIFI:...`) |
| `width` | number | no | Size in px (64–2048), default 256 |
| `margin` | number | no | Quiet zone (0–10), default 2 |
| `dark` | string | no | Foreground hex, e.g. `#000000` |
| `light` | string | no | Background hex, e.g. `#ffffff` |
| `errorCorrectionLevel` | string | no | `L` \| `M` \| `Q` \| `H` |

**Response:** `image/png` binary.

### `POST /qr/data-url`

Same body as above. **Response:** `{ "dataUrl": "data:image/png;base64,...", "mimeType": "image/png" }`.

### `GET /qr/health`

Returns `{ "status": "ok", "module": "qr" }`.

## Example

```bash
curl -X POST http://localhost:3000/qr/png ^
  -H "Content-Type: application/json" ^
  -d "{\"text\":\"https://example.com\",\"width\":256}" ^
  --output qrcode.png
```

## Project structure

- `src/main.ts` – bootstrap, validation pipe, CORS
- `src/app.module.ts` – root module
- `src/qr/` – feature module (controller, service, DTOs)

## Standards used

- **ValidationPipe** – DTOs with `class-validator`
- **ConfigModule** – env-based port and CORS
- **Feature module** – isolated QR domain
- **Service layer** – QR generation in `QrService` only
