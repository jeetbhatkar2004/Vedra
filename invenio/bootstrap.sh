#!/usr/bin/env bash
set -euo pipefail
make -C "$(dirname "$0")" up
sleep 10
make -C "$(dirname "$0")" init roles users
echo "InvenioRDM is up at http://localhost:8080"
