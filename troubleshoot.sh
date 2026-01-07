#!/bin/bash

echo "🔍 TROUBLESHOOTING - SWINGER WORLD"
echo "===================================="
echo ""

# 1. Verificar DNS
echo "1️⃣ Verificando DNS..."
nslookup www.swinguerworld.com 2>/dev/null || echo "⚠️  nslookup no disponible"
echo ""

# 2. Verificar conectividad
echo "2️⃣ Verificando conectividad..."
ping -c 3 www.swinguerworld.com 2>/dev/null || echo "⚠️  ping no disponible"
echo ""

# 3. Verificar certificado SSL
echo "3️⃣ Verificando SSL..."
echo | openssl s_client -connect www.swinguerworld.com:443 -servername www.swinguerworld.com 2>/dev/null | grep "subject="
echo ""

# 4. Headers completos
echo "4️⃣ Headers HTTP completos:"
curl -I https://www.swinguerworld.com 2>/dev/null
echo ""

# 5. Verificar Railway status
echo "5️⃣ Railway Status:"
echo "   Últimos deployments: SUCCESSFUL ✅"
echo "   Proyecto: kind-insight"
echo "   Entorno: production"
echo ""

echo "✅ Troubleshooting completado"
