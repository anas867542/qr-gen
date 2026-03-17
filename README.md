# QR Code Generator — Frontend (Next.js) + Backend (NestJS)

## Frontend (Next.js)

The **frontend** is a Next.js 14 app (App Router) with a clear folder structure for adding features later.

### Run

```bash
cd frontend
npm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_API_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Deploy

- **Vercel / Netlify:** Connect the repo; build command `npm run build`, output from `frontend` (or root if frontend is repo root).
- Set **`NEXT_PUBLIC_API_URL`** to your deployed backend URL.
- In **backend** `.env`, set **`CORS_ORIGINS`** to your frontend origin(s).

---

## Local test (full stack)

### 1. Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

API: **http://localhost:3000** — `GET /qr/health`

### 2. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

If the backend uses port 3000, run the frontend on another port: `npm run dev -- -p 3001`. If the backend is up, the UI uses the API; otherwise it falls back to in-browser QR generation.

---

## Backend endpoints

| Method | Path | Body | Response |
|--------|------|------|----------|
| `GET` | `/qr/health` | — | `{ status, module }` |
| `POST` | `/qr/data-url` | `{ text, width?, margin?, dark?, light?, errorCorrectionLevel? }` | `{ dataUrl, mimeType }` |
| `POST` | `/qr/png` | same | PNG binary |
