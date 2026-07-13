NODE := $(shell command -v node 2>/dev/null || printf "%s" "/Users/juan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node")

install:
	@echo "No frontend dependencies to install"

lint:
	$(NODE) --check app.js

test:
	$(NODE) --check app.js

docker-build:
	docker build -t tarot-mvp .
