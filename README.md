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

Open <http://localhost:5174>. Nginx serves the frontend and proxies requests
under `/api/` to the backend. Stop everything with `docker compose down`.

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
/api/tarot/interpretations
```

The browser only connects to Nginx. Nginx forwards that path to the Kubernetes
Service `tarot-backend` on port `8000`, so the backend does not need its own
`port-forward`. The OpenAI API key belongs only in the backend environment.
Never add it to `app.js`, `index.html`, an image, or source control.

## Run in Kubernetes with one port-forward

Deploy the backend and frontend in the `tarot` namespace, then expose only the
frontend Service locally:

```bash
kubectl apply -f ../infra/k8s/namespace.yaml
kubectl apply -f ../infra/k8s/backend-config.yaml
kubectl apply -k ../tarot-interpretation-service/k8s
kubectl apply -k k8s
kubectl -n tarot port-forward service/tarot-frontend 5174:80
```

Open <http://localhost:5174>. Requests follow this path:

```text
browser -> tarot-frontend:80 -> /api/* -> tarot-backend:8000
```

Both Services must be in the same namespace for the short DNS name
`tarot-backend` to resolve. No Ingress controller is required.

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
- `nginx.conf`: SPA routing and reverse proxy for `/api/`.
- `Dockerfile`: Nginx image that serves the static files.

## Troubleshooting

- **Microservice did not respond:** confirm `tarot-backend` exists in the
  `tarot` namespace and its endpoints are ready with
  `kubectl -n tarot get endpoints tarot-backend`.
- **502 Bad Gateway:** confirm the backend pod is Ready and listens on port
  `8000`.
- **Missing card image:** artwork comes from Wikimedia Commons and requires an
  internet connection.
