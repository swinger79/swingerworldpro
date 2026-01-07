#!/bin/bash

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🔍 VERIFICACIÓN DEL PROYECTO SWINGER WORLD             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅ $1${NC}"
        return 0
    else
        echo -e "${RED}❌ $1 (FALTA)${NC}"
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅ $1/${NC}"
        return 0
    else
        echo -e "${RED}❌ $1/ (FALTA)${NC}"
        return 1
    fi
}

errors=0

echo "📁 Verificando estructura de archivos..."
echo ""

# Archivos principales
check_file "package.json" || ((errors++))
check_file "index.html" || ((errors++))
check_file "vite.config.js" || ((errors++))
check_file "tailwind.config.js" || ((errors++))
check_file "postcss.config.js" || ((errors++))

echo ""
echo "📁 Verificando documentación..."
echo ""

check_file "README.md" || ((errors++))
check_file "DEPLOY.md" || ((errors++))
check_file "PROJECT_SUMMARY.md" || ((errors++))
check_file "QUICK_START.md" || ((errors++))
check_file "CHECKLIST.md" || ((errors++))
check_file "FINAL_SUMMARY.txt" || ((errors++))

echo ""
echo "📁 Verificando configuración de Railway..."
echo ""

check_file "railway.json" || ((errors++))
check_file "nixpacks.toml" || ((errors++))
check_file ".gitignore" || ((errors++))

echo ""
echo "📁 Verificando código fuente..."
echo ""

check_dir "src" || ((errors++))
check_file "src/App.jsx" || ((errors++))
check_file "src/main.jsx" || ((errors++))
check_dir "src/styles" || ((errors++))
check_file "src/styles/index.css" || ((errors++))
check_dir "src/data" || ((errors++))
check_file "src/data/aiMembers.json" || ((errors++))

echo ""
echo "📁 Verificando assets..."
echo ""

check_dir "public" || ((errors++))
check_file "public/favicon.svg" || ((errors++))

echo ""
echo "────────────────────────────────────────────────────────────"

if [ $errors -eq 0 ]; then
    echo -e "${GREEN}"
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║     ✅ VERIFICACIÓN COMPLETA - TODO CORRECTO               ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo ""
    echo "📊 Estadísticas:"
    echo "   • Archivos de código: $(find src -name "*.jsx" -o -name "*.css" | wc -l)"
    echo "   • Archivos de config: $(ls *.json *.js *.toml 2>/dev/null | wc -l)"
    echo "   • Archivos de docs: $(ls *.md *.txt 2>/dev/null | wc -l)"
    echo "   • AI Members: $(cat src/data/aiMembers.json | grep '"id"' | wc -l)"
    echo ""
    echo "🚀 Próximos pasos:"
    echo "   1. npm install"
    echo "   2. npm run dev"
    echo "   3. Lee DEPLOY.md para subir a Railway"
    echo ""
else
    echo -e "${RED}"
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║     ⚠️  ERRORES ENCONTRADOS: $errors                         ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo ""
    echo "Por favor, verifica los archivos faltantes."
fi

echo ""
echo "────────────────────────────────────────────────────────────"
echo ""
