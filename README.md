# Tarot MVP — Frontend

Static single-page frontend for a one-card tarot reading. The user selects a
deck, reveals a card, enters a question, and requests a contextual
interpretation from the backend.

## Requirements

- Docker and Docker Compose (recommended), or any static HTTP server.
- No package dependencies or build step.

## Run the complete application

From the parent `tarot` directory:

```bash
cp .env.example .env
# Edit .env and set OPENAI_API_KEY.
docker compose up --build
```

Open <http://localhost:5174>. The backend runs at <http://localhost:8000>.
Stop everything with `docker compose down`.

## Run only the frontend

```bash
docker build -t tarot-mvp .
docker run --rm -p 5174:80 tarot-mvp
```

Alternatively, serve this directory over HTTP on port `5174`. Do not open
`index.html` directly with a `file://` URL.

## Backend integration and credentials

`index.html` configures the endpoint as:

```text
http://localhost:8000/api/tarot/interpretations
```

The browser sends the question and selected card to that endpoint. The OpenAI
API key belongs only in the backend environment. Never add it to `app.js`,
`index.html`, an image, or source control.

## Validate

```bash
make lint
make test
```

Both commands validate the JavaScript syntax.

## Main files

- `index.html`: markup and backend endpoint.
- `styles.css`: responsive visual design.
- `app.js`: deck data, interactions, and API request.
- `Dockerfile`: nginx image that serves the static files.

## Troubleshooting

- **Microservice did not respond:** confirm the backend is on port `8000` and
  <http://localhost:8000/health/ready> returns HTTP 200.
- **CORS error:** use `http://localhost:5174` or add the frontend origin to
  backend `ALLOWED_ORIGINS`.
- **Missing card image:** artwork comes from Wikimedia Commons and requires an
  internet connection.

