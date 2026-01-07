#!/bin/bash

echo "📊 MONITOR DE RAILWAY - SWINGER WORLD"
echo "======================================"
echo ""

while true; do
    clear
    echo "🔄 Actualizando cada 30 segundos... (Ctrl+C para salir)"
    echo ""
    
    # Status de la app
    echo "📍 STATUS PRINCIPAL:"
    curl -s -I https://www.swinguerworld.com | head -n 1
    
    echo ""
    echo "⏱️  Timestamp: $(date '+%Y-%m-%d %H:%M:%S')"
    echo ""
    echo "🌐 URLs Activas:"
    echo "   → https://www.swinguerworld.com"
    echo "   → https://swingerworldpro-production.up.railway.app"
    echo ""
    echo "📈 Última actualización de Railway:"
    echo "   → Hace 3 minutos (según tu captura)"
    echo ""
    
    sleep 30
done
