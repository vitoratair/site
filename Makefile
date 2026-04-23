# Locaweb: build + upload (FTP com lftp, ou rsync por SSH).
# 1) cp .env.locaweb.example .env.locaweb && editar
# 2) make publish

.PHONY: help install build publish publish-upload

help:
	@echo "Alvos:"
	@echo "  make install   - npm ci"
	@echo "  make build     - install + vite build → dist/"
	@echo "  make publish   - build + upload para Locaweb (lê .env.locaweb)"
	@echo "  make publish-upload - só upload (usa dist/ existente)"
	@echo ""
	@echo "Credenciais: ficheiro .env.locaweb (ver .env.locaweb.example)"
	@echo "FTP: precisa de lftp (macOS: brew install lftp)"
	@echo "SSH: LOCAWEB_PUBLISH_METHOD=rsync no .env.locaweb"

install:
	npm ci

build: install
	npm run build

publish: build
	@chmod +x scripts/publish-locaweb.sh 2>/dev/null || true
	@./scripts/publish-locaweb.sh

publish-upload:
	@echo "→ Upload apenas (usa dist/ existente, sem rebuild)"
	@chmod +x scripts/publish-locaweb.sh 2>/dev/null || true
	@./scripts/publish-locaweb.sh
