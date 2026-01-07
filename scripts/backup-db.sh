#!/bin/bash
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups/db_$TIMESTAMP"
mkdir -p $BACKUP_DIR
echo "✅ Backup system ready"
