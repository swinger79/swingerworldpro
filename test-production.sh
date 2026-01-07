#!/bin/bash

echo "🧪 TESTING SWINGER WORLD EN PRODUCCIÓN"
echo "========================================"

BASE_URL="https://www.swinguerworld.com"
RAILWAY_URL="https://swingerworldpro-production.up.railway.app"

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

test_url() {
    local url=$1
    local name=$2
    
    echo -n "Testing $name... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    
    if [ "$response" = "200" ] || [ "$response" = "301" ] || [ "$response" = "302" ]; then
        echo -e "${GREEN}✓ OK ($response)${NC}"
        return 0
    else
        echo -e "${RED}✗ FAIL ($response)${NC}"
        return 1
    fi
}

echo ""
echo "📍 TESTING URLs:"
test_url "$BASE_URL" "Frontend Principal"
test_url "$RAILWAY_URL" "Railway URL"

echo ""
echo "📊 TESTING ASSETS:"
test_url "$BASE_URL/assets" "Assets Directory"
test_url "$BASE_URL/vite.svg" "Vite Logo"

echo ""
echo "🎨 VERIFICANDO ARCHIVOS ESTÁTICOS:"
test_url "$BASE_URL/index.html" "Index HTML"

echo ""
echo "✅ Testing completado"
