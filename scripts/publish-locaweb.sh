#!/usr/bin/env bash
# Upload da pasta dist/ para a Locaweb (Linux: public_html na raiz do FTP/SSH).
# Credenciais: ficheiro .env.locaweb (ver .env.locaweb.example) ou variáveis de ambiente.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ -f .env.locaweb ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env.locaweb
  set +a
fi

REMOTE_DIR="${LOCAWEB_REMOTE_DIR:-public_html}"
METHOD="${LOCAWEB_PUBLISH_METHOD:-ftp}"

# No FTP, o "cwd" inicial já é a pasta da conta — caminhos absolutos (/home/...) costumam dar 550.
if [[ "$METHOD" != "rsync" ]] && [[ "$REMOTE_DIR" == /* ]]; then
  echo "Erro: com FTP, LOCAWEB_REMOTE_DIR não pode ser um caminho absoluto (${REMOTE_DIR})." >&2
  echo "      Usa só a pasta relativa ao login FTP, em geral: public_html" >&2
  echo "      (ex.: no .env.locaweb → LOCAWEB_REMOTE_DIR=public_html)" >&2
  exit 1
fi

if [[ ! -d dist ]] || [[ ! -f dist/index.html ]]; then
  echo "Erro: pasta dist/ em falta ou incompleta. Corre primeiro: npm run build (ou make build)" >&2
  exit 1
fi

if [[ "$METHOD" == "rsync" ]]; then
  : "${LOCAWEB_SSH_HOST:?Defina LOCAWEB_SSH_HOST (e user/path no .env.locaweb)}"
  : "${LOCAWEB_SSH_USER:?Defina LOCAWEB_SSH_USER}"
  REMOTE_PATH="${LOCAWEB_SSH_PATH:-~/public_html}"
  RSYNC=(rsync -avz)
  if [[ "${LOCAWEB_RSYNC_NO_DELETE:-0}" != "1" ]]; then
    RSYNC+=(--delete)
  fi
  RSYNC+=(dist/ "${LOCAWEB_SSH_USER}@${LOCAWEB_SSH_HOST}:${REMOTE_PATH}/")
  if [[ "${LOCAWEB_RSYNC_NO_DELETE:-0}" == "1" ]]; then
    echo "→ rsync dist/ → ${LOCAWEB_SSH_USER}@${LOCAWEB_SSH_HOST}:${REMOTE_PATH}/ (sem --delete)"
  else
    echo "→ rsync dist/ → ${LOCAWEB_SSH_USER}@${LOCAWEB_SSH_HOST}:${REMOTE_PATH}/ (com --delete)"
  fi
  "${RSYNC[@]}"
  echo "→ Concluído."
  exit 0
fi

# FTP (predefinido) — usa lftp (brew install lftp)
if ! command -v lftp >/dev/null 2>&1; then
  echo "Erro: o comando 'lftp' não está instalado. Na macOS: brew install lftp" >&2
  echo "      Ou define LOCAWEB_PUBLISH_METHOD=rsync e usa SSH (ver .env.locaweb.example)." >&2
  exit 1
fi

: "${LOCAWEB_FTP_HOST:?Defina LOCAWEB_FTP_HOST (painel → Arquivos e FTP)}"
: "${LOCAWEB_FTP_USER:?Defina LOCAWEB_FTP_USER}"
: "${LOCAWEB_FTP_PASSWORD:?Defina LOCAWEB_FTP_PASSWORD}"

# Só exclui .DS_Store — não uses .git* aqui: com --delete o lftp pode tentar aceder a
# ficheiros como dist/.gitignore que não existem no build e falha.
MIRROR_EXTRA=(--exclude-glob .DS_Store)
# Por defeito --delete: o destino fica igual ao dist/ (apaga no servidor o que não está no build).
# LOCAWEB_FTP_NO_DELETE=1 para desativar (ex.: há outros ficheiros em public_html que queres manter).
if [[ "${LOCAWEB_FTP_NO_DELETE:-0}" != "1" ]]; then
  MIRROR_EXTRA+=(--delete)
  echo "→ lftp: enviar dist/ → ${REMOTE_DIR}/ (com --delete: remove no servidor o que não existe em dist/)"
else
  echo "→ lftp: enviar dist/ → ${REMOTE_DIR}/ (LOCAWEB_FTP_NO_DELETE=1 — sem --delete)"
fi

# mirror -R: envia local dist → remoto; --parallel acelera uploads pequenos
lftp -u "${LOCAWEB_FTP_USER}","${LOCAWEB_FTP_PASSWORD}" "${LOCAWEB_FTP_HOST}" <<EOF
set cmd:fail-exit yes
set net:max-retries 3
set net:reconnect-interval-base 5
set ftp:passive-mode true
cd ${REMOTE_DIR}
lcd dist
mirror -R --verbose --parallel=3 ${MIRROR_EXTRA[*]}
bye
EOF

echo "→ Concluído."
